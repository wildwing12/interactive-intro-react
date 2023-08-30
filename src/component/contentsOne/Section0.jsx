import React from 'react';
import PropTypes from "prop-types";


const Section0 = ({scrollHeight}) => {
    const sectionStyle = () => {
        return {height: scrollHeight}
    }

    return (
        <section className="scroll-section" id="scroll-section-0" style={sectionStyle()}>
            <h1>AirMug pro</h1>
            <div className="sticky-elem main-message">
                <p>온전히 빠져들게 하는 <br/> 최고급 세라믹</p>
            </div>
            <div className="sticky-elem main-message">
                <p>주변 맛을 느끼게 해주는<br/> 주변 맛 허용 모드</p>
            </div>
            <div className="sticky-elem main-message">
                <p>온종일 편안한 <br/> 맞춤형 손잡이</p>
            </div>
            <div className="sticky-elem main-message">
                <p>새롭게 입가를<br/>찾아온 매혹</p>
            </div>
        </section>
    )
}

export default React.memo(Section0);

Section0.propTypes = {
    scrollHeight: PropTypes.string.isRequired,
}