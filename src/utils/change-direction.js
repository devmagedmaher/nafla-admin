const changeDir = (locale) => {
  
  console.log({ locale});

  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('root').setAttribute('dir', dir);

}


export default changeDir;