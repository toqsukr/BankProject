import { FC, SVGAttributes } from 'react'

const SettingIcon:FC<SVGAttributes<HTMLOrSVGElement>> = ({...props}) => {
  return (
    <svg {...props} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="25" fill="#F2F2F2"/>
    <path d="M20.4931 30.4904C20.4931 29.3805 19.5607 28.4808 18.4106 28.4808C17.2605 28.4808 16.3281 29.3805 16.3281 30.4904C16.3281 31.6003 17.2605 32.5 18.4106 32.5C19.5607 32.5 20.4931 31.6003 20.4931 30.4904Z" fill="#D9D9D9"/>
    <path d="M31.9365 17.5C30.7864 17.5 29.854 18.3997 29.854 19.5096C29.854 20.6195 30.7864 21.5192 31.9365 21.5192C33.0866 21.5192 34.019 20.6195 34.019 19.5096C34.019 18.3997 33.0866 17.5 31.9365 17.5Z" fill="#D9D9D9"/>
    <path d="M29.854 19.5096C29.854 18.3997 30.7864 17.5 31.9365 17.5C33.0866 17.5 34.019 18.3997 34.019 19.5096M29.854 19.5096C29.854 20.6195 30.7864 21.5192 31.9365 21.5192C33.0866 21.5192 34.019 20.6195 34.019 19.5096M29.854 19.5096C20.366 19.5096 12.5 19.5096 12.5 19.5096M34.019 19.5096C36.3232 19.5096 37.5 19.5096 37.5 19.5096M37.5 30.4904H23.6168C23.6168 30.4904 21.7129 30.4904 20.4931 30.4904M12.5 30.4904C12.5 30.4904 13.8883 30.4904 16.3281 30.4904M20.4931 30.4904C20.4931 29.3805 19.5607 28.4808 18.4106 28.4808C17.2605 28.4808 16.3281 29.3805 16.3281 30.4904M20.4931 30.4904C20.4931 31.6003 19.5607 32.5 18.4106 32.5C17.2605 32.5 16.3281 31.6003 16.3281 30.4904" stroke="#8D8D8D" strokeWidth="1.5"/>
    </svg>
    
    

  )
}

export default SettingIcon