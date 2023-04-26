const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <p>
        Dependable. Passionate. Veteran. Life long learner. Peleton owner. I
        love participating in my community to bring opportunities for small
        business owners to own their applications.{" "}
      </p>

      <p>
        I joined the Air Force one week after my high school graduation and
        enjoyed my service. The skills I learned have helped me tremendously
        with interpersonal relationships and operational security. My Honor
        Guard service was life altering.
      </p>

      <p>
        After the military I attended community college. Re located to Houston
        and pursued a career in restaurant management. My passion for technology
        took over in my late twenties and after contemplation, I decided to
        transition into software development and have not looked back.{" "}
      </p>

      <p>
        I am currently studying for the CompTIA A+ & CompTIA Security+
        certifications. Attendee of a full stack developer BootCamp March 2022,/
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
