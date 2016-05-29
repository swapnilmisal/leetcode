#include<stdio.h>
#include<stdlib.h>

typedef struct set{

	int key;
	int rank;
	struct set *parent;

}set;

typedef struct list{

	set *node;
	struct list *next;
}list;

list* head = NULL;

void find_set(int);
void insert(int key){

	set * temp = (set *)malloc(sizeof(set));
	list * temp_1 = (list *)malloc(sizeof(list));
	list * ordi;
	ordi = head;
	
	temp -> key = key;
	temp -> rank = 0;
	temp_1 -> node = temp -> parent = temp;
	temp_1 -> next = NULL;

	if(!head)
		head = temp_1;
	else {
		while(ordi -> next)
			ordi = ordi -> next;
			ordi -> next = temp_1; 
		}
		
}

void display(){
	
		list *temp = head;
	if(!head)
		printf("\n\tEmpty list");
	else{
		while(temp){

			printf("\nkey= %d rank= %d",temp -> node -> key,temp -> node -> rank);	
			temp = temp -> next;
			
			}
		
	}

		
	
	



}

void uni(int x,int y){

list * temp_1, *temp_2;
	temp_1 = head;
	temp_2 = head;
set * tem_1;
set * tem_2;
		if(!head)
			printf("\n Empty list");
		else{
			while(temp_1 -> node -> key != x && temp_1)
				temp_1 = temp_1 -> next;

			while(temp_2 -> node -> key != y && temp_2)
						temp_2 = temp_2 -> next;

				if(!temp_1 || !temp_2)
					printf("\n\tx,y not Found");
				else{		
					for(tem_1 = temp_1 -> node; tem_1 -> parent != tem_1; tem_1 = tem_1 -> parent);
					for(tem_2 = temp_2 -> node; tem_2 -> parent != tem_2; tem_2 = tem_2 -> parent);
				if(tem_1 -> rank < tem_2 -> rank){
						tem_1 -> parent = tem_2;
						tem_2 -> rank += 1;
						
					}
					else {
							tem_2 -> parent = tem_1;
							tem_1 -> rank += 1;
						}
					find_set(x);
					find_set(y);

				}
			}

				


}

void find_set(int key){

	list * temp_1;
	set * tem_1;

		if(!head)
			printf("\n Empty list");
		else{
			for(temp_1 = head; temp_1 -> node -> key != key && temp_1 ; temp_1 = temp_1 -> next);
			for(tem_1 = temp_1 -> node; tem_1 -> parent != tem_1; tem_1 = tem_1 -> parent);
					printf("represetative of %d is %d",key,tem_1 -> key);
					temp_1 -> node -> parent = tem_1; // path compression
			}

}
int main(int argc, char * argv[]){

int x,y;
int key;
	int choice = 1;

	while(choice){

	printf("\n\tEnter your choice \n\t1: Insert\n\t2: Union\n\t3: find set\n\t4: Display\n\t0: Exit\n\t");
	scanf("%d",&choice);

	switch(choice){

		case 1:
			printf("\nEnter Key ");
			scanf("%d",&key);
			insert(key);
			break;

		case 2:	
			printf("\nEnter numbers to union");
			scanf("%d%d",&x,&y);
			uni(x,y);
			break;

		case 3:
			printf("\nEnter Key ");
			scanf("%d",&key);
			find_set(key);
			break;

		case 4:
			display();
			break;
		default:

			exit(0);
			 break;

}




}

return 0;
}

