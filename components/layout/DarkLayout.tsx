import { FC, PropsWithChildren } from "react"



export const DarkLayout: FC <PropsWithChildren> = ({children}) => {
  return (
    <div style= {{
        backgroundColor: 'rgba(10,100,10,0.5)',
        padding: '30px',
        borderRadius: '5px'
    }}>
        <h3>Dark Layout</h3>
        <div>
            {children}
        </div>
    </div>
  )
}
