import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactSlider from "react-slider";

const Slider = ({ onChange, value }) => {
  const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 8px;
  `;

  const StyledThumb = styled.div`
    height: 24px;
    line-height: 25px;
    width: 24px;
    text-align: center;
    background-color: #fff;
    color: #fff;
    border-radius: 50%;
    cursor: grab;
    border: 1px solid #d9d9d9;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.2);
  `;

  const Thumb = (props, state) => (
    <StyledThumb {...props} style={{ ...props.style, top: "-7px" }}
      className="transition duration-500 ease-in-out  transform  hover:scale-110"
    >
      <img
        src="https://deploy-preview-52--evergreen-gulp.netlify.app/assets/images/svg/menu-alt-4.svg"
        alt="s"
        style={{ position: "absolute", width: 12, top: 8, left: 5 }}
      />
    </StyledThumb>
  );

  const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${(props) =>
      props.index === 2 ? "#007aff" : props.index === 1 ? "#ddd" : "#007aff"};
    border-radius: 999px;
  `;

  const Track = (props, state) => (
    <StyledTrack {...props} index={state.index} />
  );

  return (
    <StyledSlider
      value={value}
      renderTrack={Track}
      renderThumb={Thumb}
      onAfterChange={onChange}
    />
  );
};

Slider.propTypes = {};

export default Slider;
