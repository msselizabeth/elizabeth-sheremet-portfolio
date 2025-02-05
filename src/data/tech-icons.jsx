import StackIcon from "tech-stack-icons";

const techIcons = {
  react: <StackIcon name="reactjs" className="project__icon" />,
  next: <StackIcon name="nextjs2" className="project__icon nextjs" />,
  node: <StackIcon name="nodejs" className="project__icon" />,
  mongo: <StackIcon name="mongodb" className="project__icon" />,
  css: <StackIcon name="css3" className="project__icon" />,
  sass: <StackIcon name="sass" className="project__icon" />,
  nextauth: (
    <img
      src="/images/nextauth-icon.png"
      alt="NextAuth icon"
      className="project__icon"
    />
  ),
  openai: <StackIcon name="openai" className="project__icon open-ai" />,
  aws: <StackIcon name="aws" className="project__icon aws" />,
  vercel: (
    <img
      src="/images/vercel-icon.png"
      alt="Vercel icon"
      className="project__icon"
    />
  ),
  js: <StackIcon name="js" className="project__icon" />,
  ts: <StackIcon name="typescript" className="project__icon" />,
  mysql: <StackIcon name="mysql" className="project__icon" />,
  tailwindcss: <StackIcon name="tailwindcss" className="project__icon" />,
  express: (
    <img
      src="/images/express-icon.png"
      alt="Express.js icon"
      className="project__icon"
    />
  ),
  prisma: <StackIcon name="prisma" className="project__icon prisma" />,
  vite: <StackIcon name="vitejs" className="project__icon" />,
};

export default techIcons;