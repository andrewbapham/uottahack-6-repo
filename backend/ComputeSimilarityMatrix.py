import pandas as pd
import numpy as np 
import scipy
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
from sklearn.compose import ColumnTransformer


def clean_df(df):
    """
    Clean the DataFrame by encoding object columns and standardizing numerical columns.
    """
    
    df = df.drop('user_id', axis=1)
    # Encode Object Columns
    encoded_object_columns = pd.get_dummies(df.select_dtypes(include=['object']))

    # Standardize Numerical Columns
    numerical_columns = df.select_dtypes(include=['int64', 'float64'])
    scaler = StandardScaler()
    scaled_numerical_columns = pd.DataFrame(scaler.fit_transform(numerical_columns), columns=numerical_columns.columns)
  
    features_matrix = pd.concat([encoded_object_columns, scaled_numerical_columns], axis=1)
    
    return features_matrix

def compute_similarity_matrix(features_matrix):
    """
    Reduce dimensionality and compute similarity matrix 
    """
    
    pca = PCA(n_components=0.95) 
    features_matrix_reduced = pca.fit_transform(features_matrix)
    similarity_matrix = cosine_similarity(features_matrix_reduced)

    return similarity_matrix



def get_top10ids(df, similarity_matrix, user_id):
    """
    Get the top 10 most similar user ids based on a similarity matrix.
    """
    # Get index of the user_id in the dataset
    user_index = next(index for index, profile in enumerate(df.iterrows()) if profile[1]["user_id"] == user_id)

    # Get similarity values for the specified user and sort them
    similar_scores = list(enumerate(similarity_matrix[user_index]))
    similar_scores = sorted(similar_scores, key=lambda x: x[1], reverse=True)

    # Get the top 10 most similar user indices, excluding the user themselves
    top_10_similar_indices = [i for i, score in similar_scores[1:11]]

    # Return the user_ids of the top 10 similar profiles
    return [df.iloc[i]["user_id"] for i in top_10_similar_indices]
