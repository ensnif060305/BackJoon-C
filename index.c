/* 10350 은행 Ruby 5 */

/*first try 시간초과*/

#include<stdio.h>

int k[10000], n, m;

void bank() {
	int key = 0, index = 0;
	for (int i = 0; i < n; i++) {
		if (k[i] < key) {
			if (i == 0) {
				k[n - 1] += k[i];
				k[i + 1] += k[i];
				k[i] *= -1;
			}
			else if (i == n - 1) {
				k[0] += k[i];
				k[i - 1] += k[i];
				k[i] *= -1;
			}
			else {
				k[i - 1] += k[i];
				k[i + 1] += k[i];
				k[i] *= -1;
			}
			m++;
		}
	}
	for (int j = 0; j < n; j++) {
		if (k[j] >= 0) {
			index++;
			if (index == n) {
				break;
			}
			else {
				continue;
			}
		}
		else {
			bank();
		}
	}
}


int main() {
	scanf("%d", &n);
	for (int i = 0; i < n; i++) {
		scanf("%d ", &k[i]);
	}
	bank();
	printf("%d", m);
}

/*second try*/

NULL
