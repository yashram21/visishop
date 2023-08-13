import {useEffect,useState,useCallback} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';


export default function useAlan() {
    const [alanInstance, setAlanInstance] = useState()
    useEffect(() => {
        if (alanInstance != null) return
    
        setAlanInstance(
          alanBtn({
            top: "15px",
            left: "25px",
            key: '0530d0ce60f1a4de07391624b4089e8e2e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({ command, payload }) => {
              window.dispatchEvent(new CustomEvent(command, { detail: payload }))
            }
          })
        )
      }, [alanInstance])
    
      return null
    }

