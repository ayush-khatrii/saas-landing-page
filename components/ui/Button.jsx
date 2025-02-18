import React from 'react'

const Button = ({ children }) => {
  return (
    <button className="relative py-2 px-3 rounded-lg cursor-pointer font-medium text-sm bg-gradient-to-b from-[#4e0394] to-[#2a024f] shadow-[0px_0px_8px_#8c45ff] transition-all duration-200 ease-in-out text-white">
      <div className="absolute inset-0">
        <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="border  absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)] rounded-lg" />
        <div className="absolute rounded-lg inset-0 shadow-[0_0_8px_#4e0394]" />
      </div>
      <span>{children}</span>
    </button>
  )
}

export default Button