import HeroImg from "./../../assets/images/landing.jpg";
import { Button } from "../../utils/styles/generalStyles";
import { useNavigate } from "react-router-dom";
import {
  Hero as HeroWrapper,
  HeroFigure,
  HeroImage,
  HeroOverlay,
  HeroContent,
  HeroTextCard,
  HeroTitle,
  HeroSubtitle,
  HeroContentInner,
} from "./HeroStyle";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <HeroWrapper>
      <HeroFigure>
        <HeroImage src={HeroImg} alt="Hero image" />
      </HeroFigure>
      <HeroOverlay></HeroOverlay>
      <HeroContent>
        <HeroContentInner>
          <HeroTextCard>
            <HeroTitle>Transform Your Fitness Journey with GymZe.</HeroTitle>
            <HeroSubtitle>
              Fuel Your Fire, Shape Your Story. Elevate your fitness game.
            </HeroSubtitle>
            <Button onClick={() => navigate("/courses")} isSecondary>
              Explore courses
            </Button>
          </HeroTextCard>
        </HeroContentInner>
      </HeroContent>
    </HeroWrapper>
  );
};
export default Hero;
