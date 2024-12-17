"use client";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 10%;
  background-color: #fff;
  min-height: calc(100vh - 200px);
`;

const SearchBarSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    max-width: 600px;
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;

    &:focus {
      border-color: #000;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 2;
  padding-right: 2rem;
  border-right: 1px solid #ddd;

  h2 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.95rem;
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

const FooterLinks = styled.div`
  margin-top: 2rem;

  a {
    color: #000;
    text-decoration: underline;
    font-size: 0.9rem;

    &:hover {
      text-decoration: none;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;

  button {
    background-color: #000;
    color: #fff;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: #333;
    }
  }
`;

export default function ContactUs() {
  return (
    <Container>
      <SearchBarSection>
        <h1>GET HELP</h1>
        <input type="text" placeholder="What can we help you with?" />
      </SearchBarSection>

      <ContentWrapper>
        <LeftSection>
          <h2>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
          <p>
            We want to make buying your favorite Nike shoes and gear online fast
            and easy, and we accept the following payment options:
          </p>
          <ul>
            <li>Visa, Mastercard, Discover, Diners Club, American Express</li>
            <li>Visa Electron</li>
            <li>PayPal</li>
            <li>Apple Pay</li>
          </ul>
          <p>
            Nike Members can use multiple debit or credit cards in their profile
            for faster checkout. If you&#39;re not already a Member, join us now!
          </p>
          <ButtonGroup>
            <button>JOIN US</button>
            <button>SHOP NIKE</button>
          </ButtonGroup>

          <h3>FAQs</h3>
          <p>
            <strong>Are my card and payment details secure?</strong> Yes, we
            ensure the security of your information during checkout.
          </p>
          <p>
            <strong>Can I pay for my order with multiple methods?</strong> Nike
            Members can combine cards for payment.
          </p>

          <FooterLinks>
            <a href="#">WHAT ARE NIKE&#39;S DELIVERY OPTIONS?</a> <br />
            <a href="#">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</a>
          </FooterLinks>
        </LeftSection>

        <RightSection>
          <h1><strong>CONTACT US</strong></h1>
          <Image src="/assests/help 1.png" alt="Phone" height = {242} width = {265.25} />
          <Image src="/assests/help 2.png" alt="Clock" height = {158} width = {265.25} />
          <Image src="/assests/help 3.png" alt="message" height = {158} width = {265.25} />
          <Image src="/assests/help 4.png" alt="location" height = {158} width = {265.25} />
        </RightSection>
      </ContentWrapper>
    </Container>
  );
}
