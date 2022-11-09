import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';

export default function Page() {
  return (
    <div className="max-w-screen-md mx-auto">
      <header className="flex justify-between items-center p-8">
        <h1 className="text-xl">Hello world</h1>
        <ThemeToggle />
      </header>
      <Button label="Button 1" secondary />
      <Checkbox />
    </div>
  );
}
