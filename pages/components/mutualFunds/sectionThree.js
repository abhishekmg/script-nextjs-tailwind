import React from 'react';
import styles from '../../../styles/Home.module.css'

const SectionThree = props => {

  const renderSingleCard = () => (
    <div className={`w-full rounded-md bg-white shadow-md ${styles.section_three_card}`}>
      <figure className="bg-scriptbox-yellow flex justify-center rounded-t-md">
        <svg className="w-40 h-10 my-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 187 40" id="group-card-images"><path clip-rule="evenodd" d="M1.944 37c-.535 0-1.02-.22-1.372-.572A1.937 1.937 0 010 35.056V3.077l2.643 1.321L5.44 3l2.798 1.398L11.035 3l2.797 1.398L16.63 3l2.798 1.398L22.224 3l2.797 1.398 2.642-1.32-.07 32.22c-.097.12-.27.212-.525.316-.718.294-1.927.541-3.941.753-3.761.396-10.194.633-21.183.633z" fill="#fff" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M31.29 30H3.907v4.54c0 1.406-.58 2.453-2.059 2.453h28.043c.77 0 1.399-.63 1.399-1.399z" fill="#8dbfff" fill-rule="evenodd"></path><path d="M9.133 22.873L20.52 11.368" stroke="#5890da" stroke-linecap="round" stroke-width="1.5"></path><path d="M15.781 20.703a1.677 1.677 0 100 3.353 1.677 1.677 0 000-3.353zM13.926 10.106a1.677 1.677 0 100 3.353 1.677 1.677 0 000-3.353z" stroke="#5890da" stroke-width="1.5"></path><path d="M64.543 38c8.977 0 16.254-7.277 16.254-16.253 0-8.976-7.277-16.253-16.254-16.253S48.29 12.77 48.29 21.747C48.29 30.723 55.567 38 64.543 38z" fill="#fbae1f"></path><g stroke-width="1.5" stroke-linecap="round"><path d="M75.479 3.877h5.756M78.357 1v5.756M83.239 11.428h3.239M84.858 9.808v3.24" stroke="#fbae1f"></path><path d="M67.007 31.128L59.76 22.59h1.526c3.16 0 5.72-1.664 5.72-4.225s-2.56-4.226-5.72-4.226h-1.526" stroke="#fff" stroke-linejoin="round"></path><path d="M59.753 18.373h9.808M59.755 14.132h9.808" stroke="#fff"></path></g><path clip-rule="evenodd" d="M117.149 1c-2.011 0-4.146.686-5.597 2.684-.901 1.241-1.543 3.059-1.884 5.471-1.614.559-2.663 1.562-3.19 2.966-.517 1.378-.565 2.874-.12 4.489-.819 1.36-1.274 2.54-1.396 3.53-.194 1.57.09 3.573.485 4.914.647 2.191 1.76 4.185 3.229 5.586 1.384 1.32 3.082 2.122 5.014 2.122h6.604c2.668 0 4.959-2.282 6.376-3.959 1.57-1.856 2.447-4.035 2.447-8.248 0-2.221-.749-3.953-2.214-5.213.347-3.53-.146-5.978-1.318-7.416-.908-1.114-1.873-1.858-2.881-2.26-.219-1.815-1.01-3.086-2.301-3.864-1.012-.61-2.012-.802-3.254-.802z" fill="#ace0a2" fill-rule="evenodd"></path><path d="M116.963 38.045V17.477M103.478 38.192h26.981M120.294 18.95l-3.331 4.097M113.163 21.908l3.805 3.293v4.727l4.652-5.698" stroke="#54894a" stroke-linecap="round" stroke-width="2"></path><path clip-rule="evenodd" d="M156.043 29.25a.275.275 0 00-.268.318l.963 5.617a.983.983 0 00.966.815h2.357a.98.98 0 00.968-.828l.883-5.608a.271.271 0 00-.077-.236.271.271 0 00-.193-.08zM171.613 29.25a.275.275 0 00-.268.318l.965 5.618a.98.98 0 00.966.814h2.251a.98.98 0 00.965-.813l.97-5.618a.275.275 0 00-.269-.319z" fill="#ff9e9e" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M153.672 7.015l3.024.527a2.046 2.046 0 011.692 1.872l.051.728a21.537 21.537 0 018.181-1.48c8.597 0 15.569 4.2 15.569 11.987 0 7.788-6.97 11.976-15.569 11.976-7.527 0-13.808-3.116-15.253-9.198l-3.175-1.098a1.087 1.087 0 01-.733-1.029v-2.248a1.087 1.087 0 01.74-1.032l3.465-1.172a10.237 10.237 0 012.563-4.006 2.036 2.036 0 01-.912-1.253l-.812-3.322a1.017 1.017 0 01.246-.942 1.024 1.024 0 01.923-.31z" fill="#ffbdbd" fill-rule="evenodd"></path><path d="M156.261 17.81a1.197 1.197 0 100-2.395 1.197 1.197 0 000 2.395z" fill="#c56565"></path></svg>
      </figure>
      <div className="p-4">
        <h4 className="text-base font-semibold pb-2">
          Choose Long Term Plan in the plans page
      </h4>
        <p className="text-scriptbox-gray-5 text-sm">
          The fund can be chosen once you select Long Term Plan
      </p>
      </div>
    </div>
  )


  return (
    <section className="pt-20 pb-24 max-w-screen-lg mx-auto"> 
      <h2 className="text-scriptbox-black-1 font-bold text-2xl sm:text-3xl text-center pb-3">
        How to invest in best mutual funds with Scripbox
      </h2>
      <p className=" text-base text-scriptbox-gray-5 text-center max-w-md mx-auto">
      Investing through Scripbox is made easy and paperless. All you need to
                        do is follow the below steps and start investing.
      </p>
      {/* card part */}
      <div className="pt-12 space-x-6 flex items-center overflow-y-scroll lg:overflow-visible px-3 lg:px-0 pb-2">
        {renderSingleCard()}
        {renderSingleCard()}
        {renderSingleCard()}
        {renderSingleCard()}

      </div>
    </section>
  );
};

SectionThree.propTypes = {
  
};

export default SectionThree;