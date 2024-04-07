'use client'

import NavBar from "@/ui-components/NavBar"
import PageContent from "@/ui-components/PageContent";
import { Divider, Flex, Input } from "@aws-amplify/ui-react"
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { useState } from "react";


export default function Home() {
  const [showCreateDoc, setShowCreateDoc] = useState(false)
  return (
    <main>
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
              children: "Upload Document",
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
            <Divider label="Upload image to get started"/> <br />
            <Input type="file"/>

          </div>
          
        </PageContent >
      </Flex>
    </main>
  )
}

