import React from "react";
import PropTypes from "prop-types";

const Section1 = ({scrollHeight}) =>{
    const sectionStyle = () => {
        return {height: scrollHeight}
    }
    return(
        <section className="scroll-section" id="scroll-section-1" style={sectionStyle()}>
            <p className='description'>
                <strong>보통스크롤영역</strong>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque eaque ex exercitationem
                laborum
                minus modi omnis quia, quidem sunt. Accusamus aliquid, amet assumenda, corporis dignissimos dolorem
                eaque earum
                eligendi enim et eum fuga inventore iure, iusto laborum modi neque non nulla quaerat qui quibusdam
                saepe tempore
                totam ut velit vitae voluptate voluptatum? At culpa itaque magni non omnis quam qui quod rem. Ab
                aspernatur, aut
                beatae cumque dignissimos eos id, illum ipsum iste iusto minus molestiae obcaecati officia omnis
                provident
                quaerat quod sint temporibus tenetur voluptatem! Accusantium architecto blanditiis consequatur cum
                cumque
                cupiditate debitis dicta doloremque dolorum ea earum eius esse eum ex excepturi explicabo facere
                fuga hic
                incidunt ipsum, iure labore laudantium minima molestiae nihil nisi nobis nulla obcaecati odit
                officiis
                perferendis perspiciatis quis quisquam repellendus, sequi soluta vitae! Adipisci blanditiis
                explicabo facere.
                Alias aspernatur assumenda blanditiis corporis cupiditate eligendi, est harum id in numquam officia
                omnis optio
                possimus provident qui quidem, vel voluptatum? Assumenda deserunt dolorem provident quam ut, vel.
                Ab, debitis
                eveniet explicabo impedit ipsa ipsam molestiae veniam. Atque cupiditate dicta enim ex in incidunt
                nihil odit
                quod ut. Animi deleniti earum eligendi enim fugit impedit ipsa ipsam nam nobis nostrum odit pariatur
                repellendus, sequi, voluptatum!
            </p>
        </section>
    )
}

export default React.memo(Section1);

Section1.propTypes = {
    scrollHeight:PropTypes.string.isRequired,
}