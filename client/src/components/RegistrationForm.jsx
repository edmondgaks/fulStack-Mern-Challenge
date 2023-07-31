import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    city: '',
    zip: '',
    country: '',
    state: '',
    interests: [],
    profilePicture: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? (checked ? [...prevFormData.interests, value] : prevFormData.interests.filter((interest) => interest !== value)) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to the backend API for registration
      await axios.post('/api/users/register', formData);
      alert('Registration successful');
      // Clear form fields after successful registration
      setFormData({
        firstName: '',
        lastName: '',
        gender: '',
        dob: '',
        city: '',
        zip: '',
        country: '',
        state: '',
        interests: [],
        profilePicture: '',
        password: '',
      });
    } catch (error) {
      alert('Error occurred during registration');
      console.log(error);
    }
  };

  return (
    <div className="content blog">
      <div class="post-section aboutus registerlogin">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div class="container formcustom">
                <div
                  class="col-sm-12 col-md-12 col-xl-10 col-lg-10 ml-auto mr-auto"
                >
                  <ul
                    class="nav nav-pills nav-fill mb-1"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li class="nav-item col-6">
                      <a
                        class="custom-button phill active"
                        id="pills-signin-tab"
                        data-toggle="pill"
                        href="#pills-signin"
                        role="tab"
                        aria-controls="pills-signin"
                        aria-selected="true"
                        >Login</a>
                    </li>
                    <li class="nav-item col-6">
                      <a
                        class="custom-button phill"
                        id="pills-signup-tab"
                        data-toggle="pill"
                        href="#pills-signup"
                        role="tab"
                        aria-controls="pills-signup"
                        aria-selected="false"
                        >Register</a>
                    </li>
                  </ul>
                  <div class="tab-content" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-signin"
                      role="tabpanel"
                      aria-labelledby="pills-signin-tab"
                    >
                      <div class="col-sm-12">
                        <form method="post" id="singninFrom">
                          <div class="form-group">
                            <label class="font-weight-bold"
                              >Email <span class="text-danger">*</span></label>
                            <input
                              type="email"
                              id="email"
                              class="form-control"
                              placeholder="Enter valid email"
                              required
                            />
                          </div>
                          <div class="form-group">
                            <label class="font-weight-bold"
                              >Password
                              <span class="text-danger">*</span></label
                            >
                            <input
                              type="password"
                              name="password"
                              id="password"
                              class="form-control"
                              placeholder="***********"
                              required
                            />
                          </div>
                          <div class="form-group">
                            <div class="row">
                              <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                <label
                                  ><input
                                    type="checkbox"
                                    name="condition"
                                    id="condition"
                                  />
                                  Remember me.</label
                                >
                              </div>
                              <div
                                class="col-lg-6 col-md-6 col-sm-6 col-6 text-left text-sm-right text-lg-right text-md-right text-xl-right"
                              >
                                <a
                                  href="javascript:;"
                                  data-toggle="modal"
                                  data-target="#forgotPass"
                                  >Forgot Password?</a
                                >
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <input
                              type="submit"
                              name="submit"
                              value="Sign In"
                              class="custom-button"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-signup"
                      role="tabpanel"
                      aria-labelledby="pills-signup-tab"
                    >
                      <div class="col-sm-12">
                        <form method="post" id="singnupFrom">
                          <div class="form-group">
                            <label class="font-weight-bold"
                              >Email <span class="text-danger">*</span></label
                            >
                            <input
                              type="email"
                              id="signupemail"
                              class="form-control"
                              placeholder="Enter valid email"
                              required
                            />
                          </div>
                          <div class="form-group">
                            <label class="font-weight-bold"
                              >User Name
                              <span class="text-danger">*</span></label
                            >
                            <input
                              type="text"
                              id="signupusername"
                              class="form-control"
                              placeholder="Choose your user name"
                              required
                            />
                            <div class="text-danger">
                              <em>This will be your login name!</em>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="font-weight-bold">Phone #</label>
                            <input
                              type="text"
                              id="signupphone"
                              class="form-control"
                              placeholder="(000)-(0000000)"
                            />
                          </div>
                          <div class="form-group">
                            <label class="font-weight-bold"
                              >Password
                              <span class="text-danger">*</span></label
                            >
                            <input
                              type="password"
                              id="signuppassword"
                              class="form-control"
                              placeholder="***********"
                              pattern="^\S{6,}$"
                              onchange="this.setCustomValidity(this.validity.patternMismatch ? 'Must have at least 6 characters' : ''); if(this.checkValidity()) form.password_two.pattern = this.value;"
                              required
                            />
                          </div>
                          <div class="form-group">
                            <label class="font-weight-bold"
                              >Confirm Password
                              <span class="text-danger">*</span></label
                            >
                            <input
                              type="password"
                              name="signupcpassword"
                              id="signupcpassword"
                              class="form-control"
                              pattern="^\S{6,}$"
                              onchange="this.setCustomValidity(this.validity.patternMismatch ? 'Please enter the same Password as above' : '');"
                              placeholder="***********"
                              required
                            />
                          </div>
                          <div class="form-group">
                            <label
                              ><input
                                type="checkbox"
                                name="signupcondition"
                                id="signupcondition"
                                required
                              />
                              I agree with the
                              <a href="javascript:;">Terms &amp; Conditions</a>
                              for Registration.</label
                            >
                          </div>
                          <div class="form-group">
                            <input
                              type="submit"
                              name="signupsubmit"
                              value="Sign Up"
                              class="custom-button"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="modal fade"
                  id="forgotPass"
                  tabindex="-1"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <form method="post" id="forgotpassForm">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Forgot Password</h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div class="form-group">
                            <label
                              >Email <span class="text-danger">*</span></label
                            >
                            <input
                              type="email"
                              name="forgotemail"
                              id="forgotemail"
                              class="form-control"
                              placeholder="Enter your valid email..."
                              required
                            />
                          </div>
                          <div class="form-group"></div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="custom-button"
                            data-dismiss="modal"
                          >
                            Sign In
                          </button>
                          <button
                            type="submit"
                            name="forgotPass"
                            class="custom-button"
                          >
                            <i class="fa fa-envelope"></i>
                            Send Request
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;