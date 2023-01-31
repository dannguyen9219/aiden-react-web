import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import './App.css'

function App() {
  const [prompt, setPrompt] = useState("")

  const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  })

  const openai = new OpenAIApi(configuration)

  const generateImage = async () => {
    const response = await openai.createImage({
      prompt: "Snowing in Austin TX",
      n: 1,
      size: "1024x1024"
    })
    console.log(response.data.data[0].url)
  }

  return (
    <div className='app-main'>
      <input placeholder="Type your prompt..." className='app-input' onChange={(e) => setPrompt(e.target.value)} />
      <button onClick={generateImage}>Generate</button>
    </div>
  )
}

export default App
