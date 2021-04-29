#[cfg(windows)]
use multiinput::{KeyId, ToPrimitive};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct JoystickAngleConfiguration {
    #[serde(rename = "leftUpAngle")]
    pub left_up_angle: f32,
    #[serde(rename = "rightUpAngle")]
    pub right_up_angle: f32,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct JoystickKeyMapping {
    pub up: u8,
    pub up_two: Option<u8>,
    pub left: u8,
    pub left_two: Option<u8>,
    pub down: u8,
    pub down_two: Option<u8>,
    pub right: u8,
    pub right_two: Option<u8>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct KeyMapping {
    #[serde(rename = "leftJoystick")]
    pub left_joystick: JoystickKeyMapping,
}

impl Default for KeyMapping {
    fn default() -> Self {
        KeyMapping {
            #[cfg(windows)]
            left_joystick: JoystickKeyMapping {
                up: KeyId::to_u8(&KeyId::W).unwrap(),
                up_two: None,
                down: KeyId::to_u8(&KeyId::S).unwrap(),
                down_two: None,
                left: KeyId::to_u8(&KeyId::A).unwrap(),
                left_two: None,
                right: KeyId::to_u8(&KeyId::D).unwrap(),
                right_two: None,
            },
            #[cfg(not(windows))]
            left_joystick: JoystickKeyMapping {
                up: 0,
                up_two: 0,
                down: 0,
                down_two: 0,
                left: 0,
                left_two: 0,
                right: 0,
                right_two: 0,
            },
        }
    }
}

#[derive(Serialize, Deserialize, Debug)]
pub struct ServiceConfiguration {
    #[serde(rename = "leftJoystickAngles")]
    pub left_joystick_angles: JoystickAngleConfiguration,
    #[serde(rename = "keyMapping")]
    pub key_mapping: KeyMapping,
}

impl Default for ServiceConfiguration {
    fn default() -> Self {
        ServiceConfiguration {
            left_joystick_angles: JoystickAngleConfiguration {
                left_up_angle: 0.67,
                right_up_angle: 0.67,
            },
            key_mapping: KeyMapping::default(),
        }
    }
}
