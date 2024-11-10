const Landing = ({ icon, title, description }) => {
  return (
    <main className="mt-[132px] text-center">
      <span className="text-[64px] leading-[64px]">{icon}</span>
      <h2 className="heading-s mb-6 mt-[44px] font-bold text-black-200 dark:text-white-100">
        {title}
      </h2>
      <p className="body-m text-white-400">{description}</p>
    </main>
  );
};

export default Landing;
