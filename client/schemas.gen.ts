// This file is auto-generated by @hey-api/openapi-ts

export const $FieldRelativeVelocity = {
    properties: {
        vx: {
            type: 'number',
            title: 'Vx',
            description: 'Velocity in the x direction. Units: m/s'
        },
        vy: {
            type: 'number',
            title: 'Vy',
            description: 'Velocity in the y direction. Units: m/s'
        },
        omega: {
            type: 'number',
            title: 'Omega',
            description: 'Angular velocity. Units: rad/s'
        }
    },
    type: 'object',
    required: ['vx', 'vy', 'omega'],
    title: 'FieldRelativeVelocity',
    description: 'Field relative velocity'
} as const;

export const $HTTPValidationError = {
    properties: {
        detail: {
            items: {
                '$ref': '#/components/schemas/ValidationError'
            },
            type: 'array',
            title: 'Detail'
        }
    },
    type: 'object',
    title: 'HTTPValidationError'
} as const;

export const $RobotCommandResponse = {
    properties: {
        success: {
            type: 'boolean',
            title: 'Success',
            description: 'Whether the command was successful or not'
        }
    },
    type: 'object',
    required: ['success'],
    title: 'RobotCommandResponse',
    description: 'Response to a robot command'
} as const;

export const $ValidationError = {
    properties: {
        loc: {
            items: {
                anyOf: [
                    {
                        type: 'string'
                    },
                    {
                        type: 'integer'
                    }
                ]
            },
            type: 'array',
            title: 'Location'
        },
        msg: {
            type: 'string',
            title: 'Message'
        },
        type: {
            type: 'string',
            title: 'Error Type'
        }
    },
    type: 'object',
    required: ['loc', 'msg', 'type'],
    title: 'ValidationError'
} as const;