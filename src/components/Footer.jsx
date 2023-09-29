const Footer = () => {
  return (
    <div className='flex flex-row justify-between py-4 px-6 text-Light-Text-Secondary dark:text-Dark-Text-Primary Body1'>
      <div>
        © 2022, Made with ❤️ by <span className='text-Light-Main-Primary cursor-pointer'>ThemeSelection</span>
      </div>
      <div className='sm:flex flex-row gap-5 hidden'>
        <div className='text-Light-Main-Primary cursor-pointer'>More Themes</div>
        <div className='text-Light-Main-Primary cursor-pointer'>License</div>
        <div className='text-Light-Main-Primary cursor-pointer'>Documentation</div>
        <div className='text-Light-Main-Primary cursor-pointer'>Support</div>
      </div>
    </div>
  );
}

export default Footer