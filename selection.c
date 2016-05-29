#include<stdio.h>
#include<stdlib.h>
#define N 9



int swap(int *a,int *b){
	int temp;	
	temp=*a;
	*a=*b;
	*b=temp;

return 0;
}


int selection(int *a,int n){

	int i;
	int j;
	int min;
	int cmpr=0;
	int swp=0;
	for(i=0;i<n-1;i++){
		min=i;
		for(j=i+1;j<n;j++){
			if(a[min]>a[j]) 
			
		min=j;				
		++cmpr;
		}

		swap((a+min),(a+i));
		++swp;
		}

	printf("\n\t%d",cmpr);
	printf("\n\t%d",swp);
return 0;
}



int main(){

int n=N;
int i=0;
int A[N]={8,9,2,1,3,4,6,7,5};

	while(i<n){
	printf("  %d \n",A[i]);	
	i++;
	}

	selection(A,N);
	i=0;
	printf("\n");	
	while(i<n){
	printf("  %d \n",A[i]);	
	i++;
	}
return 0;
}
