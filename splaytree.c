#include<stdio.h>
#include<stdlib.h>


typedef struct node{

	struct node* l;
	struct node* r;
	struct node* p;	
	int k;	

}node;

node* root = NULL;



node* create(int value){

	node *vertex = (node *)malloc(sizeof(node));
	vertex -> l = NULL;
	vertex -> r = NULL;
	vertex -> p = NULL;
	vertex -> k = value;
	return vertex;
}

void insert(int value){

	node *vertex = create(value);
	node* temp;
	if(!root){
	root = vertex;

	}


	else{

	node* itr = root;

	while(itr){

		temp = itr;
		if(value <= itr -> k)
					
			itr = itr -> l;
		else
			itr = itr -> r;		

	
		}

		vertex -> p = temp;	//change 1)
	
//			1)vertex -> p = temp;
		

	if(value <= temp -> k){

		temp -> l = vertex;

	}
	else 
		temp -> r = vertex;		


	while(vertex -> p){


		if(vertex -> k <= vertex -> p -> k && !vertex -> p -> p)

			l_rotate(vertex);
		else if(!vertex -> p -> p)
			r_rotate(vertex);

		else if(vertex -> k <= vertex -> p -> k && vertex -> p -> k <= vertex -> p -> p -> k )			
			ll_rotate(vertex);

		else if(vertex -> k <= vertex -> p -> k )			
			lr_rotate(vertex);

		else if(vertex -> k > vertex -> p -> k && vertex -> p -> k > vertex -> p -> p -> k)
			rr_rotate(vertex);

		else 
			rl_rotate(vertex);

	}

}

}


l_rotate(node * vertex){

	vertex -> p -> l = vertex -> r;
	vertex -> r = vertex -> p;
	vertex -> p = vertex -> p -> p;
	vertex -> r -> p = root = vertex;
		if(vertex -> r -> l)
			vertex -> r -> l -> p = vertex -> r;

}

r_rotate(node * vertex){

	vertex -> p -> r = vertex -> l;
	vertex -> l = vertex -> p;
	vertex -> p = vertex -> p -> p;
	vertex -> l -> p = root = vertex;
		if(vertex -> l -> r)
			vertex -> l -> r -> p = vertex -> l;


}

ll_rotate(node * vertex){

	vertex -> p -> p -> l = vertex -> p -> r;
	vertex -> p -> r = vertex -> p -> p;
	vertex -> p -> p = vertex -> p -> p -> p;//???????
	vertex -> p -> r -> p = vertex -> p;
		if(vertex -> p -> r -> l)
			vertex -> p -> r -> l -> p = vertex -> p -> r;


	if(!vertex -> p -> p)
		l_rotate(vertex);
	else
			
			
		if(vertex -> p -> k <= vertex -> p -> p -> k){



			vertex -> p -> l = vertex -> r;
			vertex -> r = vertex -> p;
			vertex -> p = vertex -> p -> p;
			vertex -> r -> p = vertex;
				if(vertex -> r -> l)
					vertex -> r -> l -> p = vertex -> r;
			vertex -> p -> l = vertex;




	}


			
/*			vertex -> p -> l = vetrex -> r;
			vertex -> r = vertex -> p;
			vertex -> p -> p -> l = vertex;
			vertex -> p = vertex -> p -> p;
			vertex -> p = vertex;
*/
		else
/*			vertex -> p -> l = vetrex -> r;
			vertex -> r = vertex -> p;
			vertex -> p -> p -> r = vertex;
			vertex -> p = vertex -> p -> p;
			vertex -> p = vertex;
*/			
	{

			vertex -> p -> l = vertex -> r;
			vertex -> r = vertex -> p;
			vertex -> p = vertex -> p -> p;
			vertex -> r -> p = vertex;
				if(vertex -> r -> l)
					vertex -> r -> l -> p = vertex -> r;
			vertex -> p -> r = vertex;

	}
		
	 
}

rr_rotate(node * vertex){

	vertex -> p -> p -> r = vertex -> p -> l;
	vertex -> p -> l = vertex -> p -> p;
	vertex -> p -> p = vertex -> p -> p -> p;
	vertex -> p -> l -> p = vertex -> p;
		if(vertex -> p -> l -> r)
			vertex -> p -> l -> r -> p = vertex -> p -> l;


	if(!vertex -> p -> p)
 		r_rotate(vertex);
	else
			
			
		if(vertex -> p -> k <= vertex -> p -> p -> k){

			vertex -> p -> r = vertex -> l;
			vertex -> l = vertex -> p;
			vertex -> p = vertex -> p -> p;
			vertex -> l -> p = vertex;
				if(vertex -> l -> r)
					vertex -> l -> r -> p = vertex -> l;
			vertex -> p -> r = vertex;


			}
		else{


			vertex -> p -> r = vertex -> l;
			vertex -> l = vertex -> p;
			vertex -> p = vertex -> p -> p;
			vertex -> l -> p = vertex;
				if(vertex -> l -> r)
					vertex -> l -> r -> p = vertex -> l;
			vertex -> p -> l = vertex;

	
		}
	 



}

lr_rotate(node * vertex){

			vertex -> p -> r = vertex -> l;
			vertex -> l = vertex -> p;
			vertex -> p = vertex -> p -> p;
			vertex -> l -> p = vertex;
				if(vertex -> l -> r)
					vertex -> l -> r -> p = vertex -> l;
			vertex -> p -> l = vertex;

			if(!vertex -> p -> p)
				l_rotate(vertex);


		if(vertex -> p -> k <= vertex -> p -> p -> k){


			vertex -> p -> l = vertex -> r;
			vertex -> r = vertex -> p;
			vertex -> p = vertex -> p -> p;
			vertex -> r -> p = vertex;
				if(vertex -> r -> l)
					vertex -> r -> l -> p = vertex -> r;
			vertex -> p -> l = vertex;

			}


		else{
			vertex -> p -> l = vertex -> r;
			vertex -> r = vertex -> p;
			vertex -> p = vertex -> p -> p;
			vertex -> r -> p = vertex;
				if(vertex -> r -> r)
					vertex -> r -> l -> p = vertex -> r;
			vertex -> p -> r = vertex;

			}


}

rl_rotate(node * vertex){

			vertex -> p -> l = vertex -> r;
			vertex -> r = vertex -> p;
			vertex -> p = vertex -> p -> p;
			vertex -> r -> p = vertex;
				if(vertex -> r -> l)
					vertex -> r -> l -> p = vertex -> r;
			vertex -> p -> r = vertex;

			if(!vertex -> p -> p)
				r_rotate(vertex);


		if(vertex -> p -> k <= vertex -> p -> p -> k){


			vertex -> p -> r = vertex -> l;
			vertex -> l = vertex -> p;
			vertex -> p = vertex -> p -> p;
			vertex -> l -> p = vertex;
				if(vertex -> l -> r)
					vertex -> l -> r -> p = vertex -> l;
			vertex -> p -> l = vertex;

			}

		else{
			vertex -> p -> r = vertex -> l;
			vertex -> l = vertex -> p;
			vertex -> p = vertex -> p -> p;
			vertex -> l -> p = vertex;
				if(vertex -> l -> r)
					vertex -> l -> r -> p = vertex -> l;
			vertex -> p -> r = vertex;

			}



}

void delete(int value){

		node* itr = root;

	while(itr && itr ->k != value){
		
		if(value <= itr -> k)
				itr = itr -> l;
			else
				itr = itr -> r;
			}


	if(itr -> k == value){

		if(!itr -> l && !itr -> r){
				if( itr -> k <= itr -> p -> k)
					itr -> p -> l = NULL;
				else 
					itr -> p -> r = NULL;
				free(itr);
		}

	
		else if(itr -> l && itr -> r){
			
			node* navigator = itr -> l;
		
			while(navigator -> r)
				navigator = navigator -> r;
			
			navigator -> p -> r = navigator -> l;
			
			if(navigator -> l)
				navigator -> l -> p = navigator -> p;	
			

			itr -> k = navigator -> k;
			free(navigator);
					
			}
				

		else if(itr -> l || itr -> r){

			if(itr -> l){

			if( itr -> k <= itr -> p -> k)
					itr -> p -> l = itr -> l;
				else 
					itr -> p -> r = itr -> l;
			}
			else{
			
			if( itr -> k <= itr -> p -> k)
					itr -> p -> l = itr -> r;
				else 
					itr -> p -> r = itr -> r;	


			}
		}

			

		}
	else
		printf("\n Element Not Present");

		}





void display(node *tmp){


	if(tmp){
printf(" %d",tmp -> k);
display(tmp -> l);
display(tmp -> r);

}




}


int main(){

	int choice;
	int value;
	
	while(1){

		printf("\tMenu:\n\t1.Insert\n\t2.Display\n\t3\n\tDelete\n\t0.Exit");
		scanf("\n%d",&choice);

	switch(choice){
	
		case 1:
			printf("\nEnter Value");
			scanf(" %d",&value);
			insert(value);
			break;
			
		case 2:
			display(root);
			break;

		case 3:
			printf("\nEnter Value");
			scanf(" %d",&value);
			
			delete(value);
			break;

		case 0: exit(0);
			break;

		default:
			 break;

}




return 0;
}
