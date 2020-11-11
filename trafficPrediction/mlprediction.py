# MULTIPLE LINEAR REGRESSION
# y = m1x1 + m2x2 + m3x3 + .... + c

# Importing the libraries
import numpy as np
import pandas as pd
from math import floor

# Importing the dataset
dataset = pd.read_csv('/usr/bin/python3 "/home/sunil/Desktop/Final year project (sunil,Bhanu,Badal,Aman))/trafficPrediction/cars.csv')
temp = pd.read_csv('/usr/bin/python3 "/home/sunil/Desktop/Final year project (sunil,Bhanu,Badal,Aman))/trafficPrediction/cars.csv',usecols=[0,1,4])
X = temp.iloc[:,:].values
lane1 = dataset.iloc[:, 5].values
lane2 = dataset.iloc[:, 6].values
lane3 = dataset.iloc[:, 7].values
lane4 = dataset.iloc[:, 8].values

# Encoding categorical data

from sklearn.preprocessing import LabelEncoder
labelencoderObj = LabelEncoder()
X[:,0] = labelencoderObj.fit_transform(X[:,0])
X[:,2] = labelencoderObj.fit_transform(X[:,1])

'''
# Hot Encode (To be implement later on)

from sklearn.preprocessing import OneHotEncoder
onehotencoderObj = OneHotEncoder(categorical_features = [0])
print(repr(X))
categorical_features = [indeces of dataset to split] (here only first index(0)).
X = onehotencoderObj.fit_transform(X).toarray()
'''

# Avoiding the Dummy Variable Trap
# X = X[:, 1:]


# Splitting the dataset into the Training set and Test set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train1, y_test1 = train_test_split(X, lane1, test_size = 0.2, random_state = 0)
y_train2, y_test2 = train_test_split(lane2, test_size = 0.2, random_state = 0)
y_train3, y_test3 = train_test_split(lane3, test_size = 0.2, random_state = 0)
y_train4, y_test4 = train_test_split(lane4, test_size = 0.2, random_state = 0)


# Feature Scaling (test)
"""from sklearn.preprocessing import StandardScaler
sc_X = StandardScaler()
X_train = sc_X.fit_transform(X_train)
X_test = sc_X.transform(X_test)
sc_y = StandardScaler()
y_train = sc_y.fit_transform(y_train)"""


# Fitting Multiple Linear Regression to the Training Set
from sklearn.linear_model import LinearRegression
regressor = LinearRegression()

# Predicting the test set results
regressor.fit(X_train,y_train1)
y_pred1 = regressor.predict(X_test)

regressor.fit(X_train,y_train2)
y_pred2 = regressor.predict(X_test)

regressor.fit(X_train,y_train3)
y_pred3 = regressor.predict(X_test)

regressor.fit(X_train,y_train4)
y_pred4 = regressor.predict(X_test)

totalCars = []
for i in xrange(144):
    totalCars.append(floor(y_pred1[i] + y_pred2[i] + y_pred3[i] + y_pred4[i]))


# Input dataset to predict the values


'''

# Improving Model With Backward Elimination.


import statsmodels.formula.api as sm
# statsmodel library does not take in account the constant while calculating the equations. So, we'll...
# ...add y = m1x1 + m2x2 + ... + cx0 , where x0 = 1.
#X = np.append(arr=X,values = np.ones(shape=(50,1)),axis=1)
X = np.append(arr=np.ones(shape=(50,1)),values = X,axis=1)
# second parameter is the marix of 50 lines and 1 column containing '1'. So, we've used np.ones() function.
# axis = 0 : if you want to add rows and axis = 1 : if you want to add columns
# The 1st line above will add x0, i.e. columns of 1's at the end. But we want it at the beginning. So, use the 2nd one.4
# Also, if some datatype error comes, we can use np.ones(shape=(50,1).astype(int) instead.

X_opt = X[:,[0, 1, 2, 3, 4, 5]]
# X_opt (i.e. X_optimal) contains only the significant independent variables that have high impact on profit.
regressor_OLS = sm.OLS(endog=y,exog=X_opt).fit()
regressor_OLS.summary()
# See Lecture: Multiple Linear Regression in Python - Backward Elimination - HOMEWORK !
X_opt = X[:,[0, 3]]
regressor_OLS = sm.OLS(endog=y,exog=X_opt).fit()
regressor_OLS.summary()
# print regressor_OLS.predict()

'''