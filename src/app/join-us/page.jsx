"use client";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px); /* Adjusted for header & footer */
  padding: 2rem 0;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const FormWrapper = styled.div`
  text-align: center;
  max-width: 400px;
  width: 100%;

  h1 {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0.5rem 0;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  p {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input,
  select {
    width: 100%;
    padding: 0.8rem;
    font-size: 0.9rem;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;

    &:focus {
      border-color: #000;
    }

    @media (max-width: 768px) {
      padding: 0.7rem;
      font-size: 0.8rem;
    }
  }
`;

const GenderSelector = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 48%;
    background-color: #f5f5f5;
    color: #333;
    border: 1px solid #ccc;
    padding: 0.8rem;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: #e0e0e0;
    }

    &.selected {
      background-color: #000;
      color: #fff;
      border-color: #000;
    }

    @media (max-width: 768px) {
      padding: 0.7rem;
    }
  }
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;

  input {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const SubmitButton = styled.button`
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  padding: 0.9rem;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  margin-top: 1.5rem;

  a {
    color: #000;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default function JoinUs() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    country: "India",
    gender: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleGenderSelect = (gender) => {
    setFormData({ ...formData, gender });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Container>
      <FormWrapper>
        <h1>BECOME A NIKE MEMBER</h1>
        <p>
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration and community.
        </p>
        <StyledForm onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
          </select>
          <GenderSelector>
            <button
              type="button"
              className={formData.gender === "Male" ? "selected" : ""}
              onClick={() => handleGenderSelect("Male")}
            >
              Male
            </button>
            <button
              type="button"
              className={formData.gender === "Female" ? "selected" : ""}
              onClick={() => handleGenderSelect("Female")}
            >
              Female
            </button>
          </GenderSelector>
          <CheckboxContainer>
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
            <span>
              Sign up for emails to get updates from Nike on products, offers,
              and benefits.
            </span>
          </CheckboxContainer>
          <SubmitButton type="submit">JOIN US</SubmitButton>
        </StyledForm>
        <FooterText>
          Already a Member? <a href="/sign-in">Sign in.</a>
        </FooterText>
      </FormWrapper>
    </Container>
  );
}
