import BaseModel from "./BaseModel"

export default class DeviceRegistration extends BaseModel{
    public X_Auth_Token!: String;
    public X_Csrf_Token!: String;
}