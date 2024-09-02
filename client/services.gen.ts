// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-fetch';
import type { SetVelocityData, SetVelocityError, SetVelocityResponse } from './types.gen';

export const client = createClient(createConfig());

export class RobotControlService {
    /**
     * Set Velocity
     * Set the field relative velocity of the robot. The units are m/s and rad/s.
     */
    public static setVelocity<ThrowOnError extends boolean = false>(options: Options<SetVelocityData, ThrowOnError>) {
        return (options?.client ?? client).post<SetVelocityResponse, SetVelocityError, ThrowOnError>({
            ...options,
            url: '/set-velocity'
        });
    }
    
}