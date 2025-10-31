import { Button } from '@/components/ui/button'



function AddButton({name}: {name: string}){
    return (
    <Button className='ring-offset-background hover:ring-primary/90 transition-all duration-300 hover:ring-2 hover:ring-offset-2 addtocart-btn font-poppins font-bold bg-[#CACACA] border-0 cursor-pointer py-[5px] px-[10px] rounded text-black;'>
      {name}
    </Button>
  )
}

export default AddButton

