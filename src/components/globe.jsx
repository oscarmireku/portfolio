import IconCloud from "./ui/icon-cloud";

const slugs = [
  "microsoft",
  "cisco",
  "amazonaws",
  "vmware",
  "git",
  "jira",
  "github",
  "proxmox",
  "linux",

  
  
  
 
];

function IconCloudDemo() {
  return (
    // FIX: Added 'text-foreground' to ensure the icons inherit the correct theme color
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent text-foreground">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;