export const ADD = (item)=>{
	return{
		type:"Add_Cart",
		payload:item
	}
}

/// remove Items
export const DLT = (id)=>{
	return{
		type:"RMV_Cart",
		payload:id
	}
}


/// remove individual Items
export const REMOVE = (iteam)=>{
	return{
		type:"RMV_ONE",
		payload:iteam
	}
}
