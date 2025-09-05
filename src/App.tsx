import './App.css'
import './i18.ts'
import AppRouter from './routes.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </>
  )
}

export default App
