<?php

namespace App\Repository;

use App\Entity\UserVote;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\AbstractQuery;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method UserVote|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserVote|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserVote[]    findAll()
 * @method UserVote[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserVoteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserVote::class);
    }

    public function findPostersArrayByUser($userId)
    {
        $result = $this->createQueryBuilder('u')
            ->andWhere('u.userId = :val')
            ->setParameter('val', $userId)
            ->orderBy('u.id', 'ASC')
            ->addGroupBy('u')
//            ->setMaxResults(10)

            ->getQuery()->setHydrationMode(AbstractQuery::HYDRATE_ARRAY)
            ->getResult()
        ;

        $posters = [];
        foreach ($result as $vote)
        {
            /**
             * @var  UserVote $vote
             */
            $posters[] = $vote->getPoster()->getId();
        }
        return $posters;


    }
    // /**
    //  * @return UserVote[] Returns an array of UserVote objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?UserVote
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
