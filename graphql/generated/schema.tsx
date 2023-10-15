import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export enum AuthorStatus {
  Pending = 'PENDING',
  Verified = 'VERIFIED'
}

export type CreatePostInput = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateProductInput = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  discountPrice: Scalars['Int']['input'];
  images: Array<ImageInput>;
  name: Scalars['String']['input'];
  originalPrice: Scalars['Int']['input'];
  stock: Scalars['Int']['input'];
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['ID']['output'];
  imgSrc: Scalars['String']['output'];
  products: Array<Product>;
  public_id: Scalars['String']['output'];
};

export type ImageInput = {
  imgSrc: Scalars['String']['input'];
  public_id: Scalars['String']['input'];
};

export type LoginInput = {
  emailOrMobile: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  seller?: Maybe<Seller>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  createProduct: Product;
  deletePost: Scalars['ID']['output'];
  login: LoginResponse;
  logout: Scalars['ID']['output'];
  register: Scalars['ID']['output'];
  resendActivation: Scalars['ID']['output'];
  sellerLogin: LoginResponse;
  sellerRegister: Scalars['ID']['output'];
  updatePost: Post;
  verifyUser: Scalars['ID']['output'];
};


export type MutationCreatePostArgs = {
  data?: InputMaybe<CreatePostInput>;
};


export type MutationCreateProductArgs = {
  data?: InputMaybe<CreateProductInput>;
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  data?: InputMaybe<LoginInput>;
};


export type MutationRegisterArgs = {
  data?: InputMaybe<RegisterInput>;
};


export type MutationResendActivationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSellerLoginArgs = {
  data?: InputMaybe<SellerLoginInput>;
};


export type MutationSellerRegisterArgs = {
  data?: InputMaybe<SellerRegisterInput>;
};


export type MutationUpdatePostArgs = {
  data?: InputMaybe<UpdatePostInput>;
};


export type MutationVerifyUserArgs = {
  code: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type Post = {
  __typename?: 'Post';
  content: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Product = {
  __typename?: 'Product';
  category: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  discountPrice: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  images: Array<Image>;
  name: Scalars['String']['output'];
  originalPrice: Scalars['Int']['output'];
  seller: Seller;
  soldOut?: Maybe<Scalars['Int']['output']>;
  stock: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllProducts: Array<Product>;
  post: Post;
  token: Scalars['String']['output'];
  trendingPosts: Array<Post>;
  user: User;
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTokenArgs = {
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type RegisterInput = {
  confirmPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export enum RegisterUserRole {
  Author = 'AUTHOR',
  User = 'USER'
}

export type Seller = {
  __typename?: 'Seller';
  address?: Maybe<Scalars['String']['output']>;
  contact: Scalars['String']['output'];
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  role: UserRole;
  shopAddress?: Maybe<Scalars['String']['output']>;
  shopName?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type SellerLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SellerRegisterInput = {
  address: Scalars['String']['input'];
  confirmPassword: Scalars['String']['input'];
  contact: Scalars['String']['input'];
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  shopAddress: Scalars['String']['input'];
  shopName: Scalars['String']['input'];
};

export type TagInput = {
  title: Scalars['String']['input'];
};

export type Tokens = {
  __typename?: 'Tokens';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type UpdatePostInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  authorStatus?: Maybe<AuthorStatus>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mobile: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role: UserRole;
  updatedAt: Scalars['String']['output'];
};

export enum UserRole {
  Admin = 'ADMIN',
  Seller = 'SELLER',
  User = 'USER'
}

export type RegisterMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  confirmPassword: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: string };

export type LoginMutationVariables = Exact<{
  emailOrMobile: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', user?: { __typename?: 'User', id: string, name?: string | null, email: string, mobile: string, role: UserRole, authorStatus?: AuthorStatus | null } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: string };

export type GetPostItemFragment = { __typename?: 'Post', id: string, title: string, content: string, createdAt: string, updatedAt: string };

export type CreatePostMutationVariables = Exact<{
  data: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: string, title: string, content: string, createdAt: string, updatedAt: string } };

export type TrendingPostQueryVariables = Exact<{ [key: string]: never; }>;


export type TrendingPostQuery = { __typename?: 'Query', trendingPosts: Array<{ __typename?: 'Post', id: string, title: string, content: string }> };

export type CreateProductMutationVariables = Exact<{
  data: CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', id: string, name: string, description: string, category: string, originalPrice: number, discountPrice: number, stock: number, createdAt: string, updatedAt: string, seller: { __typename?: 'Seller', id: string, firstName?: string | null, lastName: string, role: UserRole, country?: string | null, address?: string | null }, images: Array<{ __typename?: 'Image', public_id: string, imgSrc: string }> } };

export type GetAllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProductsQuery = { __typename?: 'Query', getAllProducts: Array<{ __typename?: 'Product', id: string, name: string, description: string, category: string, originalPrice: number, discountPrice: number, stock: number, createdAt: string, updatedAt: string, seller: { __typename?: 'Seller', id: string, firstName?: string | null, lastName: string, role: UserRole, country?: string | null, address?: string | null }, images: Array<{ __typename?: 'Image', public_id: string, imgSrc: string }> }> };

export type SellerRegistrationMutationVariables = Exact<{
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  country: Scalars['String']['input'];
  address: Scalars['String']['input'];
  shopName: Scalars['String']['input'];
  shopAddress: Scalars['String']['input'];
  password: Scalars['String']['input'];
  confirmPassword: Scalars['String']['input'];
  contact: Scalars['String']['input'];
}>;


export type SellerRegistrationMutation = { __typename?: 'Mutation', sellerRegister: string };

export type SellerLoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SellerLoginMutation = { __typename?: 'Mutation', sellerLogin: { __typename?: 'LoginResponse', seller?: { __typename?: 'Seller', id: string, firstName?: string | null, lastName: string, contact: string, email: string, role: UserRole, country?: string | null, address?: string | null, shopName?: string | null, password?: string | null } | null } };

export const GetPostItemFragmentDoc = gql`
    fragment GetPostItem on Post {
  id
  title
  content
  createdAt
  updatedAt
}
    `;
export const RegisterDocument = gql`
    mutation Register($name: String, $email: String!, $password: String!, $confirmPassword: String!, $mobile: String!) {
  register(
    data: {name: $name, email: $email, password: $password, confirmPassword: $confirmPassword, mobile: $mobile}
  )
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      confirmPassword: // value for 'confirmPassword'
 *      mobile: // value for 'mobile'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const LoginDocument = gql`
    mutation Login($emailOrMobile: String!, $password: String!) {
  login(data: {emailOrMobile: $emailOrMobile, password: $password}) {
    user {
      id
      name
      email
      mobile
      role
      authorStatus
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      emailOrMobile: // value for 'emailOrMobile'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($data: CreatePostInput!) {
  createPost(data: $data) {
    ...GetPostItem
  }
}
    ${GetPostItemFragmentDoc}`;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const TrendingPostDocument = gql`
    query TrendingPost {
  trendingPosts {
    id
    title
    content
  }
}
    `;

/**
 * __useTrendingPostQuery__
 *
 * To run a query within a React component, call `useTrendingPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrendingPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrendingPostQuery({
 *   variables: {
 *   },
 * });
 */
export function useTrendingPostQuery(baseOptions?: Apollo.QueryHookOptions<TrendingPostQuery, TrendingPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrendingPostQuery, TrendingPostQueryVariables>(TrendingPostDocument, options);
      }
export function useTrendingPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrendingPostQuery, TrendingPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrendingPostQuery, TrendingPostQueryVariables>(TrendingPostDocument, options);
        }
export type TrendingPostQueryHookResult = ReturnType<typeof useTrendingPostQuery>;
export type TrendingPostLazyQueryHookResult = ReturnType<typeof useTrendingPostLazyQuery>;
export type TrendingPostQueryResult = Apollo.QueryResult<TrendingPostQuery, TrendingPostQueryVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($data: CreateProductInput!) {
  createProduct(data: $data) {
    id
    name
    description
    category
    originalPrice
    discountPrice
    stock
    createdAt
    updatedAt
    seller {
      id
      firstName
      lastName
      role
      country
      address
    }
    images {
      public_id
      imgSrc
    }
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const GetAllProductsDocument = gql`
    query GetAllProducts {
  getAllProducts {
    id
    name
    description
    category
    originalPrice
    discountPrice
    stock
    createdAt
    updatedAt
    seller {
      id
      firstName
      lastName
      role
      country
      address
    }
    images {
      public_id
      imgSrc
    }
  }
}
    `;

/**
 * __useGetAllProductsQuery__
 *
 * To run a query within a React component, call `useGetAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
      }
export function useGetAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
        }
export type GetAllProductsQueryHookResult = ReturnType<typeof useGetAllProductsQuery>;
export type GetAllProductsLazyQueryHookResult = ReturnType<typeof useGetAllProductsLazyQuery>;
export type GetAllProductsQueryResult = Apollo.QueryResult<GetAllProductsQuery, GetAllProductsQueryVariables>;
export const SellerRegistrationDocument = gql`
    mutation SellerRegistration($firstName: String, $lastName: String!, $email: String!, $country: String!, $address: String!, $shopName: String!, $shopAddress: String!, $password: String!, $confirmPassword: String!, $contact: String!) {
  sellerRegister(
    data: {firstName: $firstName, lastName: $lastName, email: $email, country: $country, address: $address, shopName: $shopName, shopAddress: $shopAddress, password: $password, confirmPassword: $confirmPassword, contact: $contact}
  )
}
    `;
export type SellerRegistrationMutationFn = Apollo.MutationFunction<SellerRegistrationMutation, SellerRegistrationMutationVariables>;

/**
 * __useSellerRegistrationMutation__
 *
 * To run a mutation, you first call `useSellerRegistrationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSellerRegistrationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sellerRegistrationMutation, { data, loading, error }] = useSellerRegistrationMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      country: // value for 'country'
 *      address: // value for 'address'
 *      shopName: // value for 'shopName'
 *      shopAddress: // value for 'shopAddress'
 *      password: // value for 'password'
 *      confirmPassword: // value for 'confirmPassword'
 *      contact: // value for 'contact'
 *   },
 * });
 */
export function useSellerRegistrationMutation(baseOptions?: Apollo.MutationHookOptions<SellerRegistrationMutation, SellerRegistrationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SellerRegistrationMutation, SellerRegistrationMutationVariables>(SellerRegistrationDocument, options);
      }
export type SellerRegistrationMutationHookResult = ReturnType<typeof useSellerRegistrationMutation>;
export type SellerRegistrationMutationResult = Apollo.MutationResult<SellerRegistrationMutation>;
export type SellerRegistrationMutationOptions = Apollo.BaseMutationOptions<SellerRegistrationMutation, SellerRegistrationMutationVariables>;
export const SellerLoginDocument = gql`
    mutation SellerLogin($email: String!, $password: String!) {
  sellerLogin(data: {email: $email, password: $password}) {
    seller {
      id
      firstName
      lastName
      contact
      email
      contact
      role
      country
      address
      shopName
      password
    }
  }
}
    `;
export type SellerLoginMutationFn = Apollo.MutationFunction<SellerLoginMutation, SellerLoginMutationVariables>;

/**
 * __useSellerLoginMutation__
 *
 * To run a mutation, you first call `useSellerLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSellerLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sellerLoginMutation, { data, loading, error }] = useSellerLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSellerLoginMutation(baseOptions?: Apollo.MutationHookOptions<SellerLoginMutation, SellerLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SellerLoginMutation, SellerLoginMutationVariables>(SellerLoginDocument, options);
      }
export type SellerLoginMutationHookResult = ReturnType<typeof useSellerLoginMutation>;
export type SellerLoginMutationResult = Apollo.MutationResult<SellerLoginMutation>;
export type SellerLoginMutationOptions = Apollo.BaseMutationOptions<SellerLoginMutation, SellerLoginMutationVariables>;