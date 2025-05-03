import { Button } from "@/components/ui/button";

const Intro = () => {
  return (
    <div className="text-primary-foreground min-h-screen">
      intro{" "}
      <Button variant="default" className="bg-primary text-primary-foreground">
        Hello
      </Button>
    </div>
  );
};

export default Intro;
