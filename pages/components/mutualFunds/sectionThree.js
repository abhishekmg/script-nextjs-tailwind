import React from 'react';
import styles from '../../../styles/Home.module.css'

const SectionThree = props => {



  return (
    <section className="pt-10 sm:pt-20 pb-24 max-w-screen-lg mx-auto lg:px-4 overflow-hidden">
      <div className={`relative ${styles.section_three_header}`}>
        <h2 className="ml-4 sm:ml-0 max-w-13-56 sm:max-w-full text-left sm:text-center text-scriptbox-black-1 font-bold text-xl sm:text-3xl pb-3">
          How to invest in best mutual funds with Scripbox
        </h2>
        <p className="hidden sm:block text-base text-scriptbox-gray-5 text-center max-w-28-625 mx-auto">
          Investing through Scripbox is made easy and paperless. All you need to
          do is follow the below steps and start investing.
        </p>
      </div>

      {/* card part */}
      <div className="pt-6 sm:pt-12 space-x-6 flex items-center overflow-x-scroll xl:overflow-visible left-50p xl:left-0 relative w-screen xl:w-full -ml-50vw xl:ml-0 pb-2">

    
        <div className={`ml-4 sm:ml-8 xl:ml-0 w-full rounded-md bg-white shadow-md ${styles.section_three_card}`}>
          <figure className="bg-scriptbox-yellow flex justify-center rounded-t-md">
            <svg className="w-40 h-10 my-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 187 40" id="group-card-images"><path clip-rule="evenodd" d="M1.944 37c-.535 0-1.02-.22-1.372-.572A1.937 1.937 0 010 35.056V3.077l2.643 1.321L5.44 3l2.798 1.398L11.035 3l2.797 1.398L16.63 3l2.798 1.398L22.224 3l2.797 1.398 2.642-1.32-.07 32.22c-.097.12-.27.212-.525.316-.718.294-1.927.541-3.941.753-3.761.396-10.194.633-21.183.633z" fill="#fff" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M31.29 30H3.907v4.54c0 1.406-.58 2.453-2.059 2.453h28.043c.77 0 1.399-.63 1.399-1.399z" fill="#8dbfff" fill-rule="evenodd"></path><path d="M9.133 22.873L20.52 11.368" stroke="#5890da" stroke-linecap="round" stroke-width="1.5"></path><path d="M15.781 20.703a1.677 1.677 0 100 3.353 1.677 1.677 0 000-3.353zM13.926 10.106a1.677 1.677 0 100 3.353 1.677 1.677 0 000-3.353z" stroke="#5890da" stroke-width="1.5"></path><path d="M64.543 38c8.977 0 16.254-7.277 16.254-16.253 0-8.976-7.277-16.253-16.254-16.253S48.29 12.77 48.29 21.747C48.29 30.723 55.567 38 64.543 38z" fill="#fbae1f"></path><g stroke-width="1.5" stroke-linecap="round"><path d="M75.479 3.877h5.756M78.357 1v5.756M83.239 11.428h3.239M84.858 9.808v3.24" stroke="#fbae1f"></path><path d="M67.007 31.128L59.76 22.59h1.526c3.16 0 5.72-1.664 5.72-4.225s-2.56-4.226-5.72-4.226h-1.526" stroke="#fff" stroke-linejoin="round"></path><path d="M59.753 18.373h9.808M59.755 14.132h9.808" stroke="#fff"></path></g><path clip-rule="evenodd" d="M117.149 1c-2.011 0-4.146.686-5.597 2.684-.901 1.241-1.543 3.059-1.884 5.471-1.614.559-2.663 1.562-3.19 2.966-.517 1.378-.565 2.874-.12 4.489-.819 1.36-1.274 2.54-1.396 3.53-.194 1.57.09 3.573.485 4.914.647 2.191 1.76 4.185 3.229 5.586 1.384 1.32 3.082 2.122 5.014 2.122h6.604c2.668 0 4.959-2.282 6.376-3.959 1.57-1.856 2.447-4.035 2.447-8.248 0-2.221-.749-3.953-2.214-5.213.347-3.53-.146-5.978-1.318-7.416-.908-1.114-1.873-1.858-2.881-2.26-.219-1.815-1.01-3.086-2.301-3.864-1.012-.61-2.012-.802-3.254-.802z" fill="#ace0a2" fill-rule="evenodd"></path><path d="M116.963 38.045V17.477M103.478 38.192h26.981M120.294 18.95l-3.331 4.097M113.163 21.908l3.805 3.293v4.727l4.652-5.698" stroke="#54894a" stroke-linecap="round" stroke-width="2"></path><path clip-rule="evenodd" d="M156.043 29.25a.275.275 0 00-.268.318l.963 5.617a.983.983 0 00.966.815h2.357a.98.98 0 00.968-.828l.883-5.608a.271.271 0 00-.077-.236.271.271 0 00-.193-.08zM171.613 29.25a.275.275 0 00-.268.318l.965 5.618a.98.98 0 00.966.814h2.251a.98.98 0 00.965-.813l.97-5.618a.275.275 0 00-.269-.319z" fill="#ff9e9e" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M153.672 7.015l3.024.527a2.046 2.046 0 011.692 1.872l.051.728a21.537 21.537 0 018.181-1.48c8.597 0 15.569 4.2 15.569 11.987 0 7.788-6.97 11.976-15.569 11.976-7.527 0-13.808-3.116-15.253-9.198l-3.175-1.098a1.087 1.087 0 01-.733-1.029v-2.248a1.087 1.087 0 01.74-1.032l3.465-1.172a10.237 10.237 0 012.563-4.006 2.036 2.036 0 01-.912-1.253l-.812-3.322a1.017 1.017 0 01.246-.942 1.024 1.024 0 01.923-.31z" fill="#ffbdbd" fill-rule="evenodd"></path><path d="M156.261 17.81a1.197 1.197 0 100-2.395 1.197 1.197 0 000 2.395z" fill="#c56565"></path></svg>
          </figure>
          <div className="p-4">
            <h4 className="text-base font-semibold pb-2 leading-1-15">
              Choose Long Term Plan in the plans page
            </h4>
            <p className="text-scriptbox-gray-5 text-sm">
              The fund can be chosen once you select Long Term Plan
            </p>
          </div>
        </div>
        <div className={`w-full rounded-md bg-white shadow-md ${styles.section_three_card}`}>
          <figure className="bg-scriptbox-blue-3 flex justify-center rounded-t-md">
            <svg className="w-40 h-10 my-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 56 59" id="create-account"><path d="M38.401 0H4.037A4.03 4.03 0 000 4.023v50.954A4.03 4.03 0 004.038 59H38.4a4.03 4.03 0 004.038-4.023V4.023A4.03 4.03 0 0038.4 0z" fill="#fff"></path><g filter="url(#bsa)"><path d="M36.96 54.86H5.479c-.738 0-1.338-.784-1.338-1.75V5.89c0-.966.6-1.75 1.338-1.75h31.483c.738 0 1.337.784 1.337 1.75v47.22c0 .966-.599 1.75-1.337 1.75z" fill="#b3b3b3"></path></g><path d="M18.632 34.158h23.807v9.315H21.632a3 3 0 01-3-3z" fill="#444" opacity=".5"></path><path d="M52.404 10.756H16.452c-1.655 0-2.996 1.208-2.996 2.7v21.602c0 1.492 1.34 2.7 2.996 2.7h35.952c1.655 0 2.996-1.208 2.996-2.7V13.456c0-1.492-1.341-2.7-2.996-2.7z" fill="#ecc94b"></path><path d="M18.632 17.892l1.552 1.775 3.623-4.14M18.632 30.313l1.552 1.775 3.623-4.14" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"></path><g fill="#fff"><rect height="2.07" rx="1.035" width="21.737" x="27.947" y="17.597"></rect><rect height="2.07" rx="1.035" width="21.737" x="27.947" y="30.018"></rect></g></svg>
          </figure>
          <div className="p-4">
            <h4 className="text-base font-semibold pb-2 leading-1-15">
            Create an account
            </h4>
            <p className="text-scriptbox-gray-5 text-sm">
              Create an account with Scripbox through a paperless process, to invest in this fund
           
            </p>
          </div>
        </div>
        <div className={`w-full rounded-md bg-white shadow-md ${styles.section_three_card}`}>
          <figure className=" bg-scriptbox-green-1 flex justify-center rounded-t-md">
            <svg className="w-40 h-10 my-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 56 57" id="invest"><path d="M37.321 35.628a1.198 1.198 0 00-1.038-.497l-25.438 1.212a1.211 1.211 0 00-1.154 1.21c0 10.687 8.695 19.382 19.382 19.382.505 0 .957-.314 1.135-.786l7.268-19.382c.143-.382.084-.81-.155-1.139z" fill="#f2c8ab"></path><g fill="#f2c7aa"><path d="M8.48 12.113V7.268a3.634 3.634 0 117.268 0v4.845M18.171 12.114V6.057a3.634 3.634 0 017.268 0v6.057M37.553 12.114V6.057a3.634 3.634 0 117.268 0v6.057M27.861 12.114v-8.48a3.634 3.634 0 017.269 0v8.48"></path></g><path d="M54.512 41.496h-53.3A1.211 1.211 0 010 40.285V11.21C0 10.542.542 10 1.211 10h53.301c.669 0 1.211.542 1.211 1.211v29.074c0 .668-.542 1.21-1.211 1.21z" fill="#0ecf72"></path><path d="M44.821 13.325H10.903a7.268 7.268 0 01-7.268 7.269v9.69a7.268 7.268 0 017.268 7.269H44.82a7.268 7.268 0 017.269-7.268v-9.691a7.268 7.268 0 01-7.269-7.269z" fill="#a4f2ac"></path><path d="M27.862 31.496a6.057 6.057 0 100-12.114 6.057 6.057 0 000 12.114z" fill="#0ecf72"></path><path d="M36.764 29.013v7.328c-3.834 0-8.7 2.126-11.265 5.159h10l10.18-.313c.225-1.179.354-2.391.354-3.634V20.668c-5.423-.664-9.269 3.115-9.269 8.345z" fill="#000" opacity=".2"></path><path d="M48.455 20.668c-5.423-.664-7.268 3.115-7.268 8.345l-.384 8.944c-6.662 0-12.942 3.835-12.942 11.71V55.7c0 .667.53 1.233 1.196 1.234 10.694.008 19.398-8.69 19.398-19.383z" fill="#f3cbaf"></path></svg>
          </figure>
          <div className="p-4">
            <h4 className="text-base font-semibold pb-2 leading-1-15">
            Invest online and transfer
            </h4>
            <p className="text-scriptbox-gray-5 text-sm">
              Invest via netbanking, UPI or through an SIP (eNACH mandate).
           
            </p>
          </div>
        </div>
        <div className={`w-full rounded-md bg-white shadow-md ${styles.section_three_card}`}>
          <figure className="bg-scriptbox-violet flex justify-center rounded-t-md">
            <svg className="w-40 h-10 my-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 60 45" id="track"><rect fill="#78b5f2" height="45" rx="5" width="60"></rect><path d="M1.607 24.012h3.75l3.585 4.79 5.522-12.195 5.893 13.928 5.893-11.06 4.821 4.537 7.5-5.798 7.871 5.798 5.77-4.537 4.573-2.868h1.608" opacity=".2" stroke="#0a5ac2" stroke-linecap="square" stroke-linejoin="round" stroke-width="3"></path><path d="M1.071 21.87h4.286l3.585 4.79 5.522-12.196 5.893 13.929 5.893-11.061 4.821 4.538 7.5-5.798 7.87 5.798 5.77-4.538 4.574-2.868h2.143" stroke="#fff" stroke-linecap="square" stroke-linejoin="round" stroke-width="2"></path><path d="M42.857 18.214c0-1.994-1.369-3.655-3.214-4.134V0H37.5v14.08c-1.845.479-3.214 2.14-3.214 4.134 0 1.995 1.369 3.656 3.214 4.134V45h2.143V22.348c1.845-.478 3.214-2.14 3.214-4.134z" fill="#f6e05e"></path></svg>
          </figure>
          <div className="p-4">
            <h4 className="text-base font-semibold pb-2 leading-1-15">
              Track your investments
            </h4>
            <p className="text-scriptbox-gray-5 text-sm">
              Track, invest more and withdraw your investments through the Scripbox dashboard              
            </p>  
          </div>
        </div>
        <div className=" xl:hidden block h-1 min-w-0.0625"></div>
      </div>
    </section>
  );
};

SectionThree.propTypes = {

};

export default SectionThree;