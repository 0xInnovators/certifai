import React from 'react'
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti'

function SocialMedia () {
    const iconClasses ='h-8 w-8 hover:transition-all ease-in-out hover:scale-110'
    const linkClasses = 'flex items-center justify-center w-8 h-8 cursor-pointer'

    return (
        <div className="flex justify-center gap-5 text-gray-500">
            <a href="#" className={linkClasses}>
                <TiSocialFacebook className={iconClasses} />
            </a>
            <a href="#" className={linkClasses}>
                <TiSocialLinkedin className={iconClasses} />
            </a>
            <a href="#" className={linkClasses}>
                <TiSocialYoutube className={iconClasses} />
            </a>
            <a href="#" className={linkClasses}>
                <TiSocialInstagram className={iconClasses} />
            </a>
            <a href="#" className={linkClasses}>
                <TiSocialTwitter className={iconClasses} />
            </a>
        </div>
    )
}

export default SocialMedia