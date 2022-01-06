import { useEffect } from "react/cjs/react.development";

const hotjarScript = 
"(function(h,o,t,j,a,r){"
+"    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};"
+"    h._hjSettings={hjid:2772303,hjsv:6};"
+"    a=o.getElementsByTagName('head')[0];"
+"    r=o.createElement('script');r.async=1;"
+"    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;"
+"    a.appendChild(r);"
+"})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');";

export function ExternalScripts() {

    const AddScript = (scriptContext) => {
        const script = document.createElement("script");
        const scriptText = document.createTextNode(scriptContext);
        script.appendChild(scriptText);
        document.body.appendChild(script);
    }

    useEffect(()=>{
        AddScript(hotjarScript);
    }, []);

    return (
        <>
        </>
    );
}