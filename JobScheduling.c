#include<stdio.h>
#define N 10

int job[N]={0,5,3,2,2,3,4,7,7,5};

int sol[N];



int JobSequence(){

int k=1;
int q,i=2;

for(i=2;i<N;i++){
											int m=1;
											while(m<N){

													printf("%d",sol[m]);
															m++;
																}

q=k;
	if(sol[k]!=k && sol[job[i]]!=job[i]){

		
			
	while(job[i]<=sol[q] && sol[q]>=q+1 && q>0){
		
		sol[q+1]=sol[q];
		q--;

	}


	sol[q+1]=job[i]; 

													printf("\nin if");
													printf("job=%d\n",job[i]);
	k++;
	}


else if(sol[job[i]]!=job[i]){

													printf("in else 2\n");
													printf("job=%d\n",job[i]);
	sol[q+1]=job[i];
	k++;

}

}

return k;
}


int main(){

int i=1;
sol[i]=job[i];
int k=JobSequence();

printf("k=%d\n",k);
k++;
i=1;
while(i<k){

printf("%d\n",sol[i]);
i++;
}


return 0;
}
