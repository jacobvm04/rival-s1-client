import { Dualsense, Input } from "dualsense-ts";
import { RobotControlService, type FieldRelativeVelocity } from "./client";

const MaxVelocity = 2.1; // m/s
const MaxRotationalVelocity = 720.0; // deg/s
const Deadzone = 0.1; // controller units
const DefaultCommand = {
  vx: 0.001,
  vy: 0,
  omega: 0,
}; // Default command to send if no controller inputs are detected
const CommandInterval = 10; // ms, interval to wait between sending commands

const getController = () => <Promise<Dualsense>>Promise.resolve(
    new Dualsense()
  ).then(
    (device) =>
      new Promise((resolve, reject) => {
        device.connection.promise("change").then(() => resolve(device));
        setTimeout(() => reject(new Error("controller not connected")), 2000);
      })
  );

interface Inputs {
  left_x: number;
  left_y: number;
  right_x: number;
}

const getInputs = (device: Dualsense) =>
  <Inputs>{
    left_x: device.left.analog.state.x.state,
    left_y: device.left.analog.state.y.state,
    right_x: device.right.analog.state.x.state,
  };

const applyDeadzone = (inputs: Inputs) =>
  <Inputs>{
    left_x: Math.abs(inputs.left_x) > Deadzone ? inputs.left_x : 0,
    left_y: Math.abs(inputs.left_y) > Deadzone ? inputs.left_y : 0,
    right_x: Math.abs(inputs.right_x) > Deadzone ? inputs.right_x : 0,
  };

const applyDefaultCommand = (command: FieldRelativeVelocity) =>
  <FieldRelativeVelocity>(
    (command.vx == 0 && command.vy == 0 && command.omega == 0
      ? DefaultCommand
      : command)
  );

const getVelocityCommand = (inputs: Inputs) =>
  <FieldRelativeVelocity>{
    vx: inputs.left_y * MaxVelocity,
    vy: -inputs.left_x * MaxVelocity,
    omega: -inputs.right_x * MaxRotationalVelocity,
  };

const sendVelocityCommand = (velocityCommand: FieldRelativeVelocity) =>
  RobotControlService.setVelocity({
    body: velocityCommand,
    baseUrl: process.env.RIVAL_ENDPOINT,
  });

const controlLoop = async (device: Dualsense) => {
  return setInterval(() => {
    const command = Promise.resolve(device)
      .then(getInputs)
      .then(applyDeadzone)
      .then(getVelocityCommand)
      .then(applyDefaultCommand);

    command.then(console.log);
    command.then(sendVelocityCommand).catch(console.error);
  }, CommandInterval);
};

getController().then(controlLoop);
