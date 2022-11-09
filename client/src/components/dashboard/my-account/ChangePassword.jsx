import React, { useState } from "react";
import { FaUserLock } from "react-icons/fa";
import Button from "../../Button";
import FormRow from "../../FormRow";
import { Card, CardHeader } from "../../UI";

const initialState = {
  password: "",
  newPassword: "",
  confirmPassword: "",
  isMember: true,
};

const ChangePassword = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Card>
      <CardHeader title="Change Password" />
      <div className="card-body">
        <form>
          <div className="mb-6">
            <FormRow
              type="text"
              labelText="Current Password"
              name="password"
              value={values.password}
              handleChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <FormRow
              type="text"
              labelText="New Password"
              name="newPassword"
              value={values.newPassword}
              handleChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <FormRow
              type="text"
              labelText="Confirm Password"
              name="confirmPassword"
              value={values.confirmPassword}
              handleChange={handleChange}
            />
          </div>
          <div>
            <Button
              type="submit"
              icon=<FaUserLock />
              text="Change Password"
              bgColor="green"
            />
          </div>
        </form>
      </div>
    </Card>
  );
};

export default ChangePassword;