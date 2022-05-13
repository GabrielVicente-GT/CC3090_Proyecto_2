import React from "react"
import "./styles/App.css"
import LogregPage from "./LogregPage"
import MainMenu from './MainMenu.js'
import EditorContainer from "./EditorContainer"

// React Router
import { 
  Routes, Route 
} from "react-router-dom"

import ProtectedRoute from "./ProtectedRoute"

// autenticacion, crea el contexto para proteger rutas
import { UserAuthContextProvider } from "./auth/UserAuthContext"

// App -> echa para porbar el iniciar sesion
const App = () => (
  <UserAuthContextProvider>
    <Routes>
      <Route path="/" element={<LogregPage />} />
      <Route
        path="/main"
        element={
          <ProtectedRoute>
            <MainMenu />
          </ProtectedRoute>
        }
      />
      <Route
        path="/editor"
        element={
          <ProtectedRoute>
            <EditorContainer />
          </ProtectedRoute>
        }
      />
    </Routes>
  </UserAuthContextProvider>
)

export default App
