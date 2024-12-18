"use client";
import styled from "styled-components";
import Image from "next/image";

// Styled Components
const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1rem;
  font-family: Arial, sans-serif;
`;

const HeroImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin-bottom: 2rem;

  Image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  max-width: 600px;
  margin-bottom: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const ProductSection = styled.section`
  padding: 2rem 2rem;
  font-family: Arial, sans-serif;

  h3 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    text-align: left;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

const ProductCard = styled.div`
  text-align: center;

  Image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  h4 {
    font-size: 1rem;
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.9rem;
    color: #666;
  }

  span {
    font-weight: bold;
    display: block;
    margin-top: 0.5rem;
  }
`;

const FeaturedSection = styled.section`
  text-align: center;
  margin: 2rem auto;
  font-family: Arial, sans-serif;

  Image {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1rem;
  }
`;

const FeaturedButton = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const GearSection = styled.section`
  padding: 2rem 2rem;
  font-family: Arial, sans-serif;

  h3 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
`;

const GearGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  Image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const GearCard = styled.div`
  text-align: center;

  h4 {
    font-size: 1rem;
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.9rem;
    color: #666;
    margin: 0.2rem 0;
  }

  span {
    font-weight: bold;
  }
`;

const DontMissSection = styled.section`
  text-align: center;
  padding: 2rem 1rem;
  background-color: #f5f5f5;
  margin: 2rem 0;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #333;
    margin-bottom: 1.5rem;
  }

  Image {
    width: 100%;
    max-width: 800px;
    margin: 0 auto 1.5rem auto;
    object-fit: cover;
  }
`;

const EssentialsSection = styled.section`
  padding: 2rem;
  text-align: center;
  font-family: Arial, sans-serif;

  h3 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
`;

const EssentialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  Image {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const EssentialsCard = styled.div`
  position: relative;
  text-align: center;

  h4 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 0.5rem;
  }
`;

const EssentialsLabel = styled.span`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
`;

const MenuSection = styled.section`
  padding: 2rem 2rem;
  font-family: Arial, sans-serif;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  h4 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 1rem;
      color: #666;
      margin-bottom: 0.5rem;
    }
  }
`;


// Main Component
export default function Home() {
  return (
    <>
      {/* Section 1 */}
      <SectionWrapper>
        <HeroImageContainer>
          <Image src="/assests/home secton 1.png" alt="Nike" width={1344} height={700} />
        </HeroImageContainer>

        <div>
          <p style={{ textTransform: "uppercase", fontSize: "0.9rem", color: "#666" }}>
            First Look
          </p>
          <Title>NIKE AIR MAX PULSE</Title>
          <Subtitle>
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse &mdash; designed
            to push you past your limits and help you go to the max.
          </Subtitle>
          <ButtonContainer>
            <Button>Notify Me</Button>
            <Button>Shop Air Max</Button>
          </ButtonContainer>
        </div>
      </SectionWrapper>

      {/* Section 2: Best of Air Max */}
      <ProductSection>
        <h3>Best of Air Max</h3>
        <ProductGrid>
          {/* Product 1 */}
          <ProductCard>
            <Image src="/assests/1.png" alt="Nike" width={441.36} height={441.36} />
            <h4>Nike Air Max Pulse</h4>
            <p>Women&aposs Shoes</p>
            <span>₹ 13,995</span>
          </ProductCard>

          {/* Product 2 */}
          <ProductCard>
            <Image src="/assests/2.png" alt="Nike" width={441.36} height={441.36} />
            <h4>Nike Air Max Pulse</h4>
            <p>Men&aposs Shoes</p>
            <span>₹ 13,995</span>
          </ProductCard>

          {/* Product 3 */}
          <ProductCard>
            <Image src="/assests/3.png" alt="Nike" width={441.36} height={441.36} />
            <h4>Nike Air Max 97 SE</h4>
            <p>Men&aposs Shoes</p>
            <span>₹ 16,995</span>
          </ProductCard>
        </ProductGrid>
      </ProductSection>

      {/* Section 3: Featured Section */}
      <FeaturedSection>
        <Image src="/assests/home section 3.png" alt="Nike" width={1344} height={700} />
        <h2>STEP INTO WHAT FEELS GOOD</h2>
        <p>Cause everyone should know the feeling of running in that perfect pair.</p>
        <FeaturedButton>Find Your Shoe</FeaturedButton>
      </FeaturedSection>

      {/* Section 4: Gear Up */}
      <GearSection>
        <h3>Gear Up</h3>
        <GearGrid>
          {/* Card 1 */}
          <GearCard>
            <Image src="/assests/gear1.png" alt="Gear" width={441.36} height={441.36} />
            <h4>Men&aposs Training</h4>
            <p>New Activewear</p>
            <span>₹ 1,995</span>
          </GearCard>

          {/* Card 2 */}
          <GearCard>
            <Image src="/assests/gear2.png" alt="Gear" width={441.36} height={441.36} />
            <h4>Women&aposs Training</h4>
            <p>New Activewear</p>
            <span>₹ 1,495</span>
          </GearCard>

          {/* Card 3 */}
          <GearCard>
            <Image src="/assests/gear3.png" alt="Gear" width={441.36} height={441.36} />
            <h4>Sports Gear</h4>
            <p>All Accessories</p>
            <span>₹ 2,995</span>
          </GearCard>

          {/* Card 4 */}
          <GearCard>
            <Image src="/assests/gear4.png" alt="Gear" width={441.36} height={441.36} />
            <h4>Performance Training</h4>
            <p>Complete Gear</p>
            <span>₹ 2,495</span>
          </GearCard>
        </GearGrid>
      </GearSection>

      {/* Section 5: Don&apost Miss Out */}
      <DontMissSection>
        <Image src="/assests/home section 5.png" alt="Nike" width={1344} height={700} />
        <h2>DON&aposT MISS OUT</h2>
        <p>Get 20% off on your first order!</p>
        <FeaturedButton>Get Started</FeaturedButton>
      </DontMissSection>

      {/* Section 6: Essentials */}
      <EssentialsSection>
        <h3>Essential Gear</h3>
        <EssentialsGrid>
          {/* Card 1 */}
          <EssentialsCard>
            <Image src="/assests/essentials1.png" alt="Essentials" width={441.36} height={441.36} />
            <EssentialsLabel>Essential Clothing</EssentialsLabel>
          </EssentialsCard>

          {/* Card 2 */}
          <EssentialsCard>
            <Image src="/assests/essentials2.png" alt="Essentials" width={441.36} height={441.36} />
            <EssentialsLabel>Sport Accessories</EssentialsLabel>
          </EssentialsCard>

          {/* Card 3 */}
          <EssentialsCard>
            <Image src="/assests/essentials3.png" alt="Essentials" width={441.36} height={441.36} />
            <EssentialsLabel>Workout Equipment</EssentialsLabel>
          </EssentialsCard>
        </EssentialsGrid>
      </EssentialsSection>

      {/* Section 7: Menu */}
      <MenuSection>
        <h3>Shop Categories</h3>
        <MenuGrid>
          <div>
            <h4>Men&aposs Shoes</h4>
            <ul>
              <li>Nike Air Max</li>
              <li>Nike SB</li>
              <li>Running</li>
              <li>Training</li>
            </ul>
          </div>

          <div>
            <h4>Women&aposs Shoes</h4>
            <ul>
              <li>Nike Air Max</li>
              <li>Nike SB</li>
              <li>Running</li>
              <li>Training</li>
            </ul>
          </div>

          <div>
            <h4>Activewear</h4>
            <ul>
              <li>Men&aposs Training</li>
              <li>Women&aposs Training</li>
              <li>New Activewear</li>
              <li>All Accessories</li>
            </ul>
          </div>

          <div>
            <h4>Sports Gear</h4>
            <ul>
              <li>Performance Gear</li>
              <li>Essential Gear</li>
              <li>New Arrivals</li>
              <li>Top Picks</li>
            </ul>
          </div>
        </MenuGrid>
      </MenuSection>
    </>
  );
}
