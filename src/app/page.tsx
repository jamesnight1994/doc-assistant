'use client'

import NavBar from "@/ui-components/NavBar"
import PageContent from "@/ui-components/PageContent";
import { Predictions } from "@aws-amplify/predictions";
import { Authenticator, Divider, Flex, Input } from "@aws-amplify/ui-react"
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { Amplify } from "aws-amplify";
import { useState } from "react";
import amplifyconfiguration from "@/amplifyconfiguration.json"


Amplify.configure(amplifyconfiguration);
function TextIdentificationUpload() {
  const [response, setResponse] = useState('You can add a photo by uploading directly from the app');

  const identifyFromFile = async (event: any) => {
    setResponse('identifying text...');
    const { target: { files } } = event;
    const [file,] = files || [];

    if (!file) {
      return;
    }
    try {
      const { text } = await Predictions.identify({
        text: {
          source: {
            file,
          },
          format: 'ALL', // Available options 'PLAIN', 'FORM', 'TABLE', 'ALL'
        }
      })
      console.log(text);
      setResponse(text.fullText);
    } catch (err) {
      setResponse(JSON.stringify(err, null, 2));
    }
  }

  return (
    <div>
      <div>
        <h3>Text identification</h3>
        <Input type="file" onChange={identifyFromFile}/>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [showCreateDoc, setShowCreateDoc] = useState(false)
  return (
    <Authenticator>
      <Flex direction="column">
        <NavBar
          overrides={{
            NavBar: {
              width: "100%",
            },
            Heading: {
              children: "Document Assistant"
            },
            Button: {
              children: "Upload",
              onClick: () => {
                setShowCreateDoc(true)
              }
            },
            Content: {
              maxWidth: "1440px",
              margin: "0 auto",
            },
          }}
        />

        <PageContent
          overrides={{
            PageContent: {
              width: "100%",
              maxWidth: "500px",
              margin: "0 auto"
            },
          }}
        >
          <div style={{ display: showCreateDoc ? 'block' : 'none' }}>
            <TextIdentificationUpload/>

          </div>
          
        </PageContent >
      </Flex>
    </Authenticator>
  )
}

