#include<stdio.h>
#define N 3

float p[N]={25,24,15};
float w[N]={18,15,10};
float x[N]={ };
float sol[N];

int Knapsack(float m){
	
	int i;
	float max=0;
	int h;
	float U=m;
	int j;
	float profit=0;
	
	for(i=0;i<N;i++)
		x[i]=p[i]/w[i];
	for(i=0;i<N;i++)
		printf("%f\n",x[i]);
	for(i=0;i<N;i++){
		
		for(j=0,max=0,h=-1;j<N;j++){

		if(max<x[j]){
			max=x[j];
			h=j;
			//printf("%")
		}	
		
		}
			
		printf("max %f\n",x[h]);
		x[h]=0.0;

		if(U>w[h]){
			U-=w[h];
			
			sol[h]=1.0;
			}
		else{
			sol[h]=U/w[h];
			U-=(w[h]*sol[h]);
		
			}
		

		}

	
for(i=0;i<N;i++){
		printf("%f\n",sol[i]);
		profit+=(sol[i]*p[i]);
}
	
		printf("Profit (%f)\n",profit);

return 0;
}

int main(){

float m=20;
Knapsack(m);


return 0;
}
