import { Input } from "@/components/ui/input";
interface InputType {
  text: string;
}
const InputDemo: React.FC<InputType> = (text) => {
  console.log(text);

  return (
    <Input
      type={` ${text}`}
      placeholder={`Enter ${text}`}
      className="p-2 py-4 bg-white placeholder:text-gray-400"
    />
  );
};
export default InputDemo;
