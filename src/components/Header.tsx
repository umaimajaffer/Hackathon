"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

// Top Bar styles
const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #f5f5f5;
  padding: 0.5rem 2rem;
  font-size: 12px;
  color: #666;

  a {
    text-decoration: none;
    color: #666;
    margin-left: 1.5rem;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

// Header Wrapper styles
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e5e5e5;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Logo Section styles
const LogoSection = styled.div`
  display: flex;
  align-items: center;

  Image {
    margin-right: 20px;
    cursor: pointer;
    height: 30px;

    @media (max-width: 768px) {
      margin-right: 0;
      height: 25px;
    }
  }
`;

// Nav styles
const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: black;
    font-weight: 500;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    font-size: 12px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1rem;
  }
`;

// Icons Section styles
const IconsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  .search {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    background-color: #f1f1f1;
    position: relative;
  }

  input {
    border: none;
    background: none;
    outline: none;
    padding-left: 30px;
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  svg {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <TopBar>
        <Image
          src="/assests/header1.png" // Fixed the path to be relative from the root
          alt="Nike"
          width={30} // Set the width for the image
          height={30} // Set the height for the image
        />
        <Link href="/products">Find a Store</Link>
        <Link href="/help">Help</Link>
        <Link href="/join-us">Join Us</Link>
        <Link href="/sign-in">Sign In</Link>
      </TopBar>

      {/* Main Header */}
      <HeaderWrapper>
        {/* Logo Section */}
        <LogoSection>
          <Image
            src="/assests/logo.png" // Fixed the path to be relative from the root
            alt="Nike"
            width={300} // Set the width for the image
            height={100} // Set the height for the image
          />
        </LogoSection>

        {/* Navigation Links */}
        <Nav>
          <Link href="/products">New & Featured</Link>
          <Link href="#">Men</Link>
          <Link href="#">Women</Link>
          <Link href="#">Kids</Link>
          <Link href="#">Sale</Link>
          <Link href="#">SNKRS</Link>
        </Nav>

        {/* Icons Section */}
        <IconsSection>
          <div className="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              style={{ position: "absolute", left: "10px" }}
              width="20"
              height="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.61 0 7.5 7.5 0 0010.61 0z"
              />
            </svg>
            <input type="text" placeholder="Search" />
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width="24"
            height="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 6.75A3.75 3.75 0 1112 9a3.75 3.75 0 014.5-2.25zM12 12.75a7.5 7.5 0 00-7.5 7.5v.75h15v-.75a7.5 7.5 0 00-7.5-7.5z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width="24"
            height="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l3 13h12l3-13H3z"
            />
          </svg>
        </IconsSection>
      </HeaderWrapper>
    </>
  );
};

export default Header;
