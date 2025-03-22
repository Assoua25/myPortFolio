// 'use client'

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { useState } from 'react'

// function ReactQueryProvider({ children }: React.PropsWithChildren) {
//   const [client] = useState(new QueryClient())

//   return <QueryClientProvider client={client}>{children}</QueryClientProvider>
// }

// export default ReactQueryProvider

'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
