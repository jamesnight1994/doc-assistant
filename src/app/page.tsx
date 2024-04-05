'use client'

import { Authenticator } from "@aws-amplify/ui-react"
import { Amplify } from "aws-amplify"
import config from '@/amplifyconfiguration.json';

Amplify.configure(config)
export default function Home() {
  return (
    <Authenticator>
      {({user}) => (
        <main>
          Hello {user?.username}
        </main>
      )}
    </Authenticator>
  )
}

