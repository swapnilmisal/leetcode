#include<stdio.h>
#include<stdlib.h>
#define N 7



int insertionsort(int *A,int n){

int j,i;
int key;
int count=0;
	
for(j=1;j<n;j++){

	key=A[j];

	i=j-1;

	while(i>-1 && key<A[i]){ //	while(i>-1 && A[i+1]<A[i]){
	A[i+1]=A[i];
	A[i]=key;
	i--;


	++count;
	}

}
printf("No of Swaps: %d",count);

return 0;
}



int main(){

int n=N;
int i=0;
int A[N]={8,9,2,1,3,4,6};

	while(i<n){
	printf("  %d \n",A[i]);	
	i++;
	}

	insertionsort(A,N);
	i=0;
	printf("\n");	
	while(i<n){
	printf("  %d \n",A[i]);	
	i++;
	}
return 0;
}
