import React from 'react'
import Script from 'next/script'

const connect = () => {
  return (
    <div>
        <Script>
            {`alert("Wecome to contact page");`}
        </Script>
      This is contact
    </div>
  )
}

export default connect

export const metadata = {
  title: "Contact Facebook - Connect with the world",
  description: "This is you can contact facebook and we can connect with the world using facebook",
};
