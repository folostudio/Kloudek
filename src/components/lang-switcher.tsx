// import { useEffect, useState } from "react";
// import { parseCookies, setCookie } from "nookies";

// const COOKIE_NAME = "googtrans";

// interface LanguageDescriptor {
//   name: string;
//   title: string;
// }

// declare global {
//   namespace globalThis {
//     var __GOOGLE_TRANSLATION_CONFIG__: {
//       languages: LanguageDescriptor[];
//       defaultLanguage: string;
//     };
//   }
// }

// const LanguageSwitcher = () => {
//   const [currentLanguage, setCurrentLanguage] = useState<string>();
//   const [languageConfig, setLanguageConfig] = useState<any>();
//   console.log(languageConfig);
  
//   useEffect(() => {
    
//     const cookies = parseCookies()
//     const existingLanguageCookieValue = cookies[COOKIE_NAME];
    
    
//     let languageValue;
//     if (existingLanguageCookieValue) {
//       const sp = existingLanguageCookieValue.split("/");
//       if (sp.length > 2) {
//         languageValue = sp[2];
//       }
//     }
//     if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
//       languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
//     }
//     if (languageValue) {
//       setCurrentLanguage(languageValue);
//     }
//     if (global.__GOOGLE_TRANSLATION_CONFIG__) {
//       setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
     
//     }
//   }, []);
  
  
//   if (!currentLanguage || !languageConfig) {
//     return null;
//   }

//   const switchLanguage = (lang: string) => () => {
//     setCookie(null, COOKIE_NAME, "/auto/" + lang)
//     window.location.reload();
//   };

//   return (
//     <div  style={{textAlign:'center', translate:'none'}}>
//       {languageConfig.languages.map((ld: LanguageDescriptor, i: number) => (
//         <>
//           {currentLanguage === ld.name ||
//           (currentLanguage === "auto" &&
//             languageConfig.defaultLanguage === ld) ? (
//             <span key={i} >
//               {ld.title}
//             </span>
//           ) : (
//             <a
//               key={`l_s_${ld}`}
//               onClick={ switchLanguage(ld.name)}
            
//               style={{color:'red', backgroundColor:'yellow'}}
//             >
//               {ld.title}
//             </a>
//           )}
//         </>
//       ))}
//     </div>
//   );
// };

// export { LanguageSwitcher, COOKIE_NAME };
