#include<stdio.h>
#include<stdlib.h>
#define N 8

struct q{
	int node;
	struct q* next;
}*head=NULL;

int arr[N];
struct q* a[N];




int attach(struct q* p,int i){

	struct q* itr=a[i];

		if(!a[i])
			a[i]=p;
	else{
		while(itr->next)
			itr=itr->next;
				
			itr->next=p;			

			}
	

return 0;
}

int enter(){

	int i;
	int j;
	int node;
	struct q*p=NULL;
	for(i=0;i<N;i++){
			printf("\n\tEnter Total adjuscent vertices for Node: %d   ",i);
			scanf("%d",&j);
	
		while(j--){
			
			printf("\n\tEnter adjuscent vertices for Node: %d ",i);
			scanf("%d",&node);
			p=(struct q*)malloc(sizeof(struct q));
			p->node=node;
			printf("in while%d",p->node);
			p->next=NULL;
			attach(p,i);

				}
		
		}
return 0;
}

int display(){

	int i;
	struct q* itr;

	
	for(i=0;i<N;i++){
		
		printf("\n%d->",i );
		
		itr=a[i];
		while(itr){
		
		printf("%d ",itr->node);		
		itr=itr->next;

		}
	

	}
	
return 0;
}

int enque(int k){

	struct q*i;
	struct q*p=(struct q*)malloc(sizeof(struct q));
		p->node=k;
		p->next=NULL;
		i=head;
		if(head)
			while(i->next)
					i=i->next;
		i->next=p;	

return 0;
}

int deque(){
	
	struct q*p;		
		p=head;	
		head=head->next;
		free(p);
return 0;
}

int bfs(int k){

	struct q *p = (struct q*)malloc(sizeof(struct q));
		p -> node = k;
		p -> next = NULL;
		
		arr[k] = 1;
		head = p;
		
		while(head){
	
			p = a[head->node];

			while(p){
				if(arr[p -> node] == 0){
					enque(p->node);
					arr[p->node] = 1;
				}
				p = p -> next;
			}
			if(head){
				printf("Elements are *%d ",head -> node);
				deque();
				}
					else	return 0;
		}
return 0;		
}

int dfs(int k){

		struct q *p;
			p = a[k];
		arr[k] = 1;
		printf("Elements are *%d ",k);
		

		while(p){
			if(arr[p->node] == 0)
					dfs( p -> node);
						
					p = p -> next;
				}
return 0;
}

int main(){

	int choice=1,k;
	int i=0;
	while(choice){

		printf("\n\t1:Input Graph\n\t2:Display\n\t3:BFS\n\t4:DFS\n\t0:Exit\n");
		scanf("%d",&choice);

		switch(choice){


			case 1:	enter();
				break;

			case 2: display();
				break;
			
			case 3: 
				printf("\nEnter Intial Vertex ");	
				scanf("%d",&k);
				for(i=0;i<N;i++)
					arr[i]=0;
				bfs(k);
				break;

			case 4: 
				printf("\nEnter Intial Vertex ");	
				scanf("%d",&k);
				
				for(i=0;i<N;i++)
					arr[i]=0;
				dfs(k);
				break;
			case 5: 
				printf("\nEnter Intial Vertex ");	
				scanf("%d",&k);
				
				for(i=0;i<N;i++)
					arr[i]=0;
				
//				spiral(k);
				break;
			default: 
				break;
				
				}
		

			}
return 0;
}
